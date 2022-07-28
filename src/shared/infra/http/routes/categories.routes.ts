import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateCategoryController } from "@modules/products/useCases/createCategory/CreateCategoryController";
import { ReadCategoriesController } from "@modules/products/useCases/readCategories/ReadCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const readCategoriesController = new ReadCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCategoryController.handle
);
categoriesRoutes.get("/", readCategoriesController.handle);

export { categoriesRoutes };
