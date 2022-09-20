import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { UserInfo } from "../../entities/userInfo.entity";
import { IUserInfo } from "../../interfaces/user";

const createUserinfoService = async({name,telephone,email}: IUserInfo) =>{
    const UserRepository = AppDataSource.getRepository(User);

    const findClient = await UserRepository.findOne({where:{name:name}})

    if(!findClient){
        throw new AppError(409,"Client not exists!")
    }

    const InfoRepository = AppDataSource.getRepository(UserInfo)
    const contact = new UserInfo();
    contact.email = email
    contact.telephone = telephone
    contact.user = findClient

    InfoRepository.create(contact);

    await InfoRepository.save(contact)

    return contact
}
export default createUserinfoService