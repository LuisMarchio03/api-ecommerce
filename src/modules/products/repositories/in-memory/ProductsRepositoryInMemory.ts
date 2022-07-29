import { Product } from "@modules/products/infra/typeorm/entities/Product";

import { ICreateProductsDTO } from "@modules/products/dtos/ICreateProductsDTO";
import { IUpdateProductsDTO } from "@modules/products/dtos/IUpdateProductsDTO";

import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  public products: Product[] = [];

  async create({
    name,
    brand,
    category_id,
    price,
    quantities,
  }: ICreateProductsDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      name,
      brand,
      category_id,
      price,
      quantities,
    });

    this.products.push(product);
    return product;
  }

  async findById(id: string): Promise<Product> {
    return this.products.find((product) => product.id === id);
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async update(id: string, data: IUpdateProductsDTO): Promise<void> {
    const findIndex = this.products.findIndex((product) => product.id === id);

    this.products[findIndex].name = data.name;
    this.products[findIndex].brand = data.brand;
    this.products[findIndex].category_id = data.category_id;
    this.products[findIndex].price = data.price;
    this.products[findIndex].quantities = data.quantities;
  }

  async delete(id: string): Promise<void> {
    this.products.filter((product) => product.id === id);
  }

  async findByName(name: string): Promise<Product> {
    return this.products.find((product) => product.name === name);
  }
}

export { ProductsRepositoryInMemory };
