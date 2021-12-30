import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";

const usersRoutes = Router();

usersRoutes.post("/", new CreateUserController().handle);
usersRoutes.get("/", ensureAuthenticated, new ListAllUsersController().handle);

export { usersRoutes };
