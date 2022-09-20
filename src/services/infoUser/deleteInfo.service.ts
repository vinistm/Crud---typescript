import { AppDataSource } from "../../data-source";
import { UserInfo } from "../../entities/userInfo.entity";
import { AppError } from "../../errors/appError";

const deleteUserInfoService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(UserInfo);
  
    const user = await userRepository.findOneBy({id:parseInt(id)});
  
    if (!user) {
      throw new AppError(404, "User not found!");
    }
  
    await userRepository.delete({id:parseInt(id) });
  
    return true;
  };
  
  export default deleteUserInfoService;
  