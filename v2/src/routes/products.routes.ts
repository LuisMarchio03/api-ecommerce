import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateProductsController } from "../modules/products/useCases/createProducts/CreateProductsController";
import { DeleteProductsController } from "../modules/products/useCases/deleteProducts/DeleteProductsController";
import { ListAllProductsController } from "../modules/products/useCases/listAllProducts/ListAllProductsController";
import { listProductsByCategoryIdController } from "./../modules/products/useCases/listProductsByCategoryId/listProductsByCategoryIdController";

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
productsRoutes.get(
  "/search",
  ensureAuthenticated,
  new listProductsByCategoryIdController().handle
);
// productsRoutes.put(
//   "/:id",
//   ensureAuthenticated,
//   new UpdateProductsController().handle
// );
productsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  new DeleteProductsController().handle
);

export { productsRoutes };
