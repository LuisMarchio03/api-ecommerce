import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateCategoryController } from "@modules/products/useCases/createCategory/CreateCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  createCategoryController.handle
);
// categoriesRoutes.get("/", profileUserController.handle);

export { categoriesRoutes };
