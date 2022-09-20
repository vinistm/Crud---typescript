import { Request, Response } from "express";
import deleteUserInfoService from "../../services/infoUser/deleteInfo.service";

const deleteUserInfoController = async (req: Request, res: Response) => {
  const id  = req.params.id;

  await deleteUserInfoService(id);

  return res.status(200).json({ message: "Info deleted!" });
};

export default deleteUserInfoController;