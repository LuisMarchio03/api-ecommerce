import { Router } from "express";

import { CreateSellerController } from "../modules/sellers/useCases/createSeller/CreateSellerController";
import { ListAllSellersController } from "../modules/sellers/useCases/listAllSellers/ListAllSellersController";
import { UpdateSellerController } from "../modules/sellers/useCases/updateSeller/UpdateSellerController";

const sellerRoutes = Router();

sellerRoutes.post("/", new CreateSellerController().handle);
sellerRoutes.get("/", new ListAllSellersController().handle);
sellerRoutes.put("/:id", new UpdateSellerController().handle);

export { sellerRoutes };
