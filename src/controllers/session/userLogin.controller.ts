import { Request, Response } from "express";
import userLoginService from "../../services/userLogin.service";


const userLoginController = async (req: Request, res: Response) => {
    const { name, password } = req.body;
  
    const userLogin = await userLoginService({ name, password });
  
    return res.status(200).json({ token: userLogin });
  };
  
  export default userLoginController;