import { ICreateProduct } from "../dtos";
import { Products } from "../entities/Products";

export interface IProductsRepository {
  create({
    name,
    description,
    price,
    category_id,
  }: ICreateProduct): Promise<Products>;
  find(): Promise<Products[]>;
  findByName(name: string): Promise<Products>;
  findByCategoryId(category_id: string): Promise<Products>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
