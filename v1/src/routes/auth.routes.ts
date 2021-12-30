import { Router } from "express";

import { AuthenticateUserController } from "../controller/auth/AuthenticateUserController";
import { TokenValidateController } from "../controller/auth/TokenValidateController";

const authRoute = Router();

authRoute.post("/", new AuthenticateUserController().handle);
authRoute.post("/validate", new TokenValidateController().handle);

export { authRoute };
