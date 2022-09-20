import { Request, Response } from "express";
import updateUserService from "../../services/updateUser.service";
const updateUserController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name } = req.body;
  await updateUserService(id, name);
  return res.status(200).json({ message: "Updated User" });
};
export default updateUserController;