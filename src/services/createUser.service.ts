import { AppDataSource } from "../data-source";
import * as bcryptjs from "bcryptjs";
import { User } from "../entities/user.entity";
import { UserInfo } from "../entities/userInfo.entity";
import { AppError } from "../errors/appError";
import { IUserRequest } from "../interfaces/user";


const createUserService = async ({
  name,
  email,
  password,
  telephone,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const finduser = await userRepository.findOne({
    where: {
      name: name,
    },
  });

  const userInfoRepository = AppDataSource.getRepository(UserInfo)
  if (finduser) {
    throw new AppError(409, "User already exists!");
  }
  const contactRepository = AppDataSource.getRepository(UserInfo);
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const userRegister = new User();

  userRegister.name = name;
  userRegister.password = hashedPassword;
  userRepository.create(userRegister);

  await userRepository.save(userRegister);

  const contact = new UserInfo();

  contact.email = email;
  contact.telephone = telephone;
  contact.user = userRegister;
  contactRepository.create(contact);

  const userInfoCreate =  userInfoRepository.create({
    telephone:contact.telephone,
    email:contact.email
  })

  await contactRepository.save(contact);
  const { user, ...contact_info } = contact;

    const returnUser = {
      id: user.id,
      name: user.name,
      created_at: user.created_at,
      updated_at: user.updated_at,
      contacts: contact_info,
    };
  return returnUser;
};
export default createUserService;