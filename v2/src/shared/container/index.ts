import { CategoryRepository } from "./../../modules/products/repositories/implementations/CategoryRepository";
import { container } from "tsyringe";

import { ICategoryRepository } from "./../../modules/products/repositories/ICategoryRepository";
import { ProductsRepository } from "./../../modules/products/repositories/implementations/ProductsRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
