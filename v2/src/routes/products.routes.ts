import { Router } from "express";

import { ensureAuthenticatedSeller } from "../middlewares/ensureAuthenticatedSeller";

import { CreateProductsController } from "../modules/products/useCases/createProducts/CreateProductsController";
import { DeleteProductsController } from "../modules/products/useCases/deleteProducts/DeleteProductsController";
import { ListAllProductsController } from "../modules/products/useCases/listAllProducts/ListAllProductsController";
import { listProductsByCategoryIdController } from "./../modules/products/useCases/listProductsByCategoryId/listProductsByCategoryIdController";

const productsRoutes = Router();

productsRoutes.post(
  "/",
  ensureAuthenticatedSeller,
  new CreateProductsController().handle
);
productsRoutes.get("/", new ListAllProductsController().handle);
productsRoutes.get("/search", new listProductsByCategoryIdController().handle);
// productsRoutes.put(
//   "/:id",
//   ensureAuthenticatedSeller
//   new UpdateProductsController().handle
// );
productsRoutes.delete(
  "/:id",
  ensureAuthenticatedSeller,
  new DeleteProductsController().handle
);

export { productsRoutes };
