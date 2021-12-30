import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateProductsController } from "../controller/CreateProducts/CreateProductsController";
import { DeleteProductsController } from "../controller/DeleteProducts/DeleteProductsController";
import { ListAllProductsController } from "../controller/ListAllProducts/ListAllProductsController";
import { UpdateProductsController } from "../controller/UpdateProducts/UpdateProductsController";

const productsRoutes = Router();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  new CreateProductsController().handle
);
productsRoutes.get(
  "/",
  ensureAuthenticated,
  new ListAllProductsController().handle
);
productsRoutes.put(
  "/:id",
  ensureAuthenticated,
  new UpdateProductsController().handle
);
productsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  new DeleteProductsController().handle
);

export { productsRoutes };
