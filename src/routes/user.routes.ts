import { Router } from "express";
import createUserController from "../controllers/user/createUSer.controller";
import schemaValidation from "../middlewares/schemaValidation";
import registerSchema from "../schemas/register/register.schema";
const routes = Router();

export const userRoutes = () => {
    routes.post(
        "",schemaValidation(registerSchema),createUserController
    )
    return routes
}
