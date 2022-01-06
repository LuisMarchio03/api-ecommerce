import { CategoryRepository } from "./../../modules/products/repositories/implementations/CategoryRepository";
import { container } from "tsyringe";

import { ICategoryRepository } from "./../../modules/products/repositories/ICategoryRepository";
import { ProductsRepository } from "./../../modules/products/repositories/implementations/ProductsRepository";
import { SellerRepository } from "../../modules/sellers/repositories/implementations/SellerRepository";
import { ISellerRepository } from "../../modules/sellers/repositories/ISellerRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";

container.registerSingleton<ISellerRepository>(
  "SellerRepository",
  SellerRepository
);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
