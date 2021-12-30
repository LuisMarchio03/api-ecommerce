import { ProductsRepository } from "./../../modules/products/repositories/implementations/ProductsRepository";
import { container } from "tsyringe";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);
