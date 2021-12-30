import { Router } from "express";
import { AuthenticateUserController } from "../modules/accounts/useCases/Auth/AuthenticateUserController";
import { TokenValidateController } from "../modules/accounts/useCases/Auth/TokenValidateController";

const authRoute = Router();

authRoute.post("/", new AuthenticateUserController().handle);
authRoute.post("/validate", new TokenValidateController().handle);

export { authRoute };
