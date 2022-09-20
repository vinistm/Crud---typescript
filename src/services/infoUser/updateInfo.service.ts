import { AppDataSource } from "../../data-source";
import { UserInfo } from "../../entities/userInfo.entity";
import { AppError } from "../../errors/appError";
const updateUserInfoService = async (id: string, telephone: number,email:string) => {
  const userRepository = AppDataSource.getRepository(UserInfo);
  const user = await userRepository.findOneBy({
    id: parseInt(id),
  });
  if (!user) {
    throw new AppError(404, "user not found!");
  }
  const newTele = telephone;
  const newEmail = email
  await userRepository.update(user!.id, {
    id: user!.id,
    telephone: newTele,
    email: newEmail
    
  });
  return true;
};
export default updateUserInfoService