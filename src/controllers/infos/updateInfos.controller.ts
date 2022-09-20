import { Request, Response } from "express";
import updateUserInfoService from "../../services/infoUser/updateInfo.service";
const updateUserInfoController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { telephone,email } = req.body;
  await updateUserInfoService(id, telephone,email);
  return res.status(200).json({ message: "Info Update" });
};
export default updateUserInfoController;