import { ICreateProduct } from "../../dtos";
import { Products } from "../../entities/Products";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepositoryInMemory implements IProductsRepository {
  products: Products[] = [];

  async create({
    name,
    description,
    price,
    category_id,
  }: ICreateProduct): Promise<Products> {
    const product = new Products();

    Object.assign(product, {
      name,
      description,
      price,
      category_id,
    });

    this.products.push(product);

    return product;
  }
  find(): Promise<Products[]> {
    throw new Error("Method not implemented.");
  }
  async findByName(name: string): Promise<Products> {
    const product = this.products.find((product) => product.name === name);
    return product;
  }
  async findByCategoryId(category_id: string): Promise<Products> {
    const product = this.products.find(
      (product) => product.category_id === category_id
    );
    return product;
  }
  update(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
