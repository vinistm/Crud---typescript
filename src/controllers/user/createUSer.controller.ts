import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const {name, email,password,telephone} = req.body;

  const newUser = await createUserService({
    name,email,password,telephone
  });
  return res.status(201).send(instanceToPlain(newUser));
};

export default createUserController;