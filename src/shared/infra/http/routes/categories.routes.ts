import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateCategoryController } from "@modules/products/useCases/createCategory/CreateCategoryController";
import { ReadCategoriesController } from "@modules/products/useCases/readCategories/ReadCategoriesController";
import { DeleteCategoryController } from "@modules/products/useCases/deleteCategory/DeleteCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const readCategoriesController = new ReadCategoriesController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);
categoriesRoutes.get("/", readCategoriesController.handle);
categoriesRoutes.delete(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteCategoryController.handle
);

export { categoriesRoutes };
