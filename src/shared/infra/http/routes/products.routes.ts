import uploadConfig from "@config/upload";
import multer from "multer";

import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

import { CreateProductController } from "@modules/products/useCases/createProduct/CreateProductController";
import { ReadProductsController } from "@modules/products/useCases/readProducts/ReadProductsController";
import { ReadProductController } from "@modules/products/useCases/readProduct/ReadProductsController";
import { DeleteProductController } from "@modules/products/useCases/deleteProduct/DeleteProductController";
import { UpdateProductController } from "@modules/products/useCases/updateProduct/UpdateProductController";
import { UpdateProductPhotoController } from "@modules/products/useCases/updateProductPhoto/UpdateProductPhotoController";

const productsRoutes = Router();

const uploadPhoto = multer(uploadConfig);

const createProductController = new CreateProductController();
const readProductsController = new ReadProductsController();
const readProductController = new ReadProductController();
const updateProductController = new UpdateProductController();
const updateProductPhotoController = new UpdateProductPhotoController();
const deleteProductController = new DeleteProductController();

productsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createProductController.handle
);
productsRoutes.get("/", readProductsController.handle);
productsRoutes.get("/:id", readProductController.handle);
productsRoutes.put("/:id", updateProductController.handle);
productsRoutes.patch(
  "/:id/upload/photo",
  ensureAuthenticated,
  ensureAdmin,
  uploadPhoto.single("photo"),
  updateProductPhotoController.handle
);
productsRoutes.delete(
  "/:id",
  ensureAuthenticated,
  ensureAdmin,
  deleteProductController.handle
);

export { productsRoutes };
