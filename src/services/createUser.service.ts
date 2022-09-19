import { AppDataSource } from "../data-source";
import * as bcryptjs from "bcryptjs";
import { User } from "../entities/user.entity";
import { UserInfo } from "../entities/userInfo.entity";
import { AppError } from "../errors/appError";
import { IUserRequest } from "../interfaces/user";


const createUserService = async (data: IUserRequest): Promise<any> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = new User();
    user.name = data.body.name;

    const userInfoRepository = AppDataSource.getRepository(UserInfo);

    const userExists = await userInfoRepository.findOneBy({
      email: data.body.email,
    });

    if (userExists) {
      throw new AppError(409, "User already exists!");
    }

    const createUser = userRepository.create(user);

    const saveUser = await userRepository.save(createUser);

    const hashedPassword = bcryptjs.hashSync(data.body.password, 10);

    const userInfoCreate = userInfoRepository.create({
      telephone: data.body.telephone,
      email: data.body.email,
      password: hashedPassword,
      user: saveUser,
    });

    await userInfoRepository.save(userInfoCreate);

    const returnUser = {
      id: createUser.id,
      name: createUser.name,
      email: userInfoCreate.email,
      telephone: userInfoCreate.telephone,
      created_at: createUser.created_at
      
    };
    return returnUser;
  };

  export default createUserService;