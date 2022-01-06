import { Router } from "express";
import { ensureAuthenticatedSeller } from "../middlewares/ensureAuthenticatedSeller";

import { CreateSellerController } from "../modules/sellers/useCases/createSeller/CreateSellerController";
import { ListAllSellersController } from "../modules/sellers/useCases/listAllSellers/ListAllSellersController";

const sellerRoutes = Router();

sellerRoutes.post("/", new CreateSellerController().handle);
sellerRoutes.get(
  "/",
  ensureAuthenticatedSeller,
  new ListAllSellersController().handle
);

export { sellerRoutes };
