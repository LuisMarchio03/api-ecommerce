import { Router } from "express";
import { ensureAuthenticatedSeller } from "../middlewares/ensureAuthenticatedSeller";

import { CreateCategoryController } from "../modules/products/useCases/createCategory/CreateCategoryController";
import { ListAllCategoriesController } from "../modules/products/useCases/listAllCategories/ListAllCategoriesController";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "/",
  ensureAuthenticatedSeller,
  new CreateCategoryController().handle
);
categoriesRoutes.get("/", new ListAllCategoriesController().handle);

export { categoriesRoutes };
