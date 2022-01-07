import { Router } from "express";
import { AuthenticateSellerController } from "../modules/sellers/useCases/Auth/AuthenticateSellerController";
import { TokenValidateController } from "../modules/sellers/useCases/Auth/TokenValidateController";

const sellersAuthRoute = Router();

sellersAuthRoute.post("/", new AuthenticateSellerController().handle);
sellersAuthRoute.post("/validate", new TokenValidateController().handle);

export { sellersAuthRoute };
