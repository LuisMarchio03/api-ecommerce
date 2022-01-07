import { Router } from "express";
import { AuthenticateClientController } from "../modules/clients/useCases/Auth/AuthenticateClientController";
import { TokenValidateController } from "../modules/clients/useCases/Auth/TokenValidateController";

const clientsAuthRoute = Router();

clientsAuthRoute.post("/", new AuthenticateClientController().handle);
clientsAuthRoute.post("/validate", new TokenValidateController().handle);

export { clientsAuthRoute };
