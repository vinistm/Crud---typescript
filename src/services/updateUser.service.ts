import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";
const updateUserService = async (id: string, name: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    id: id,
  });
  if (!user) {
    throw new AppError(404, "user not found!");
  }
  const newName = name;
  await userRepository.update(user!.id, {
    id: user!.id,
    name: newName,
    password: user!.password,
  });
  return true;
};
export default updateUserService