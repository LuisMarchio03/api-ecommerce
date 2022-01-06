import { Router } from "express";
import { CreateCategoryController } from "../modules/products/useCases/createCategory/CreateCategoryController";
import { ListAllCategoriesController } from "../modules/products/useCases/listAllCategories/ListAllCategoriesController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", new CreateCategoryController().handle);
categoriesRoutes.get("/", new ListAllCategoriesController().handle);

export { categoriesRoutes };
