import { Router } from "express";
import createUserController from "../controllers/user/createUSer.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUsersController from "../controllers/user/listUserController";
import schemaValidation from "../middlewares/schemaValidation";
import registerSchema from "../schemas/register/register.schema";
const routes = Router();

export const userRoutes = () => {
    routes.post(
        "",createUserController
    )
    routes.get("",listUsersController);
    routes.delete("/:id",deleteUserController);
    return routes
}
