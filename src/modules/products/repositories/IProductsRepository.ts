import { ICreateProductsDTO } from "../dtos/ICreateProductsDTO";
import { IUpdateProductsDTO } from "../dtos/IUpdateProductsDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductsRepository {
  create(data: ICreateProductsDTO): Promise<Product>;
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
  findByName(name: string): Promise<Product>;
  update(id: string, data: IUpdateProductsDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IProductsRepository };
