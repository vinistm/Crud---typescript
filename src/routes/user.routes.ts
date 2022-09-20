import { Router } from "express";
import createUserController from "../controllers/user/createUSer.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUserController";
import updateUserController from "../controllers/user/updateUser.controller";
import schemaValidation from "../middlewares/schemaValidation";
import registerSchema from "../schemas/register/register.schema";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
const routes = Router();

export const userRoutes = () => {
    routes.post("",createUserController)
    routes.get("",verifyAuthToken,listUsersController);
    routes.delete("/:id",deleteUserController);
    routes.patch("/:id",updateUserController);
    return routes
}
