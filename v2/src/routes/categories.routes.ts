import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateCategoryController } from "../modules/products/useCases/createCategory/CreateCategoryController";
import { ListAllCategoriesController } from "../modules/products/useCases/listAllCategories/ListAllCategoriesController";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  new CreateCategoryController().handle
);
categoriesRoutes.get(
  "/",
  ensureAuthenticated,
  new ListAllCategoriesController().handle
);

export { categoriesRoutes };
