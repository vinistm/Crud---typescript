import { AppDataSource } from "../data-source";
import { AppError } from "../errors/appError";
import { IUserLogin } from "../interfaces/user";
import * as bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserInfo } from "../entities/userInfo.entity";
import { User } from "../entities/user.entity";

const userLoginService = async ({ name, password }: IUserLogin) => {
    const userInfoRepository = AppDataSource.getRepository(User);
  
    const findUser = await userInfoRepository.findOne({ where: {name:name}});
  
    if (!findUser) {
      throw new AppError(400, "Wrong user/password");
    }
  
    const passwordMatch = bcryptjs.compareSync(password, findUser.password);
  
    if (!passwordMatch) {
      throw new AppError(400, "Wrong user/password");
    }
  
    const userRepository = AppDataSource.getRepository(UserInfo);
  
    const InfoUser = await userRepository.findOneBy({ user:findUser});
    
    const token = jwt.sign(
      {
        id: findUser!.id,
        email: InfoUser?.email,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
      }
    );
  
    return token;
  };
  export default userLoginService;
  

  