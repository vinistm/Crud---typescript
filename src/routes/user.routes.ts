import { Router } from "express";
import createUserController from "../controllers/user/createUSer.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUserController";
import updateUserController from "../controllers/user/updateUser.controller";

import schemaValidation from "../middlewares/schemaValidation";
import registerSchema from "../schemas/register/register.schema";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

import createInfoController from "../controllers/infos/createInfos.controller";
import deleteUserInfoController from "../controllers/infos/deleteInfos.controller";
import updateUserInfoController from "../controllers/infos/updateInfos.controller";
const routes = Router();

export const userRoutes = () => {
    routes.post("",schemaValidation(registerSchema),createUserController)
    routes.post("/info",verifyAuthToken ,createInfoController)
    routes.get("",listUsersController);
    routes.delete("/:id",verifyAuthToken,deleteUserController);
    routes.delete("/info/:id",verifyAuthToken,deleteUserInfoController)
    routes.patch("/:id",verifyAuthToken,updateUserController);
    routes.patch("/info/:id",verifyAuthToken,updateUserInfoController)
    return routes
}
