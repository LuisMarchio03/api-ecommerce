import { Router } from "express";
import { AuthenticateUserController } from "../modules/sellers/useCases/Auth/AuthenticateUserController";
import { TokenValidateController } from "../modules/sellers/useCases/Auth/TokenValidateController";

const authRoute = Router();

authRoute.post("/", new AuthenticateUserController().handle);
authRoute.post("/validate", new TokenValidateController().handle);

export { authRoute };
