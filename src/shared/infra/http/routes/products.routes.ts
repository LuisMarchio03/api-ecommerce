import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";

const productsRoutes = Router();

const createProductController = new CreateProductController();

productsRoutes.post("/", ensureAuthenticated, createProductController.handle);

export { productsRoutes };
