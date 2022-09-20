import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listUsersService from "../../services/listUser.service";

const listUsersController = async (req: Request, res: Response) => {
  const UsersList = await listUsersService();

  return res.status(200).json(instanceToPlain(UsersList));
};
export default listUsersController;