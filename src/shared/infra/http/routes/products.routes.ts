import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";
import { ReadProductsController } from "@modules/products/useCases/readProducts/ReadProductsController";
import { ReadProductController } from "@modules/products/useCases/readProduct/ReadProductsController";

const productsRoutes = Router();

const createProductController = new CreateProductController();
const readProductsController = new ReadProductsController();
const readProductController = new ReadProductController();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createProductController.handle
);
productsRoutes.get("/", readProductsController.handle);
productsRoutes.get("/:id", readProductController.handle);

export { productsRoutes };
