import { CategoryRepository } from "./../../modules/products/repositories/implementations/CategoryRepository";
import { container } from "tsyringe";

import { ICategoryRepository } from "./../../modules/products/repositories/ICategoryRepository";
import { ProductsRepository } from "./../../modules/products/repositories/implementations/ProductsRepository";
import { SellerRepository } from "../../modules/sellers/repositories/implementations/SellerRepository";
import { ISellerRepository } from "../../modules/sellers/repositories/ISellerRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";
import { ClientRepository } from "../../modules/clients/repositories/implementations/ClientRepository";
import { IClientRepository } from "../../modules/clients/repositories/IClientRepository";
import { IAdminRepository } from "../../modules/admin/repositories/IAdminRepository";
import { AdminRepository } from "../../modules/admin/repositories/implementations/AdminRepository";

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

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);

container.registerSingleton<IAdminRepository>(
  "AdminRepository",
  AdminRepository
);
