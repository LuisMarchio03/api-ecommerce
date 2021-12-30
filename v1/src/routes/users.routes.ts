import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateUserController } from "../controller/CreateUser/CreateUserController";
import { ListAllUsersController } from "../controller/ListAllUsers/ListAllUsersController";

const usersRoutes = Router();

usersRoutes.post("/", new CreateUserController().handle);
usersRoutes.get("/", ensureAuthenticated, new ListAllUsersController().handle);

export { usersRoutes };
