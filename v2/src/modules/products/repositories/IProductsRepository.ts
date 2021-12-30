import { ICreateProduct } from "../dtos";
import { Products } from "../entities/Products";

export interface IProductsRepository {
  create({ name, description, price }: ICreateProduct): Promise<Products>;
  find(): Promise<Products[]>;
  findByName(name: string): Promise<Products>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
