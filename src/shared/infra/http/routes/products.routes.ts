import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";
import { ReadProductsController } from "@modules/products/useCases/readProducts/ReadProductsController";

const productsRoutes = Router();

const createProductController = new CreateProductController();
const readProductsController = new ReadProductsController();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createProductController.handle
);
productsRoutes.get("/", readProductsController.handle);

export { productsRoutes };
