import { Product } from "@modules/products/infra/typeorm/entities/Product";

import { ICreateProductsDTO } from "@modules/products/dtos/ICreateProductsDTO";
import { IUpdateProductsDTO } from "@modules/products/dtos/IUpdateProductsDTO";

import { IProductsRepository } from "../IProductsRepository";

class ProductsRepositoryInMemory implements IProductsRepository {
  products: Product[] = [];

  async create({
    name,
    brand,
    categories_ids,
    price,
    quantities,
  }: ICreateProductsDTO): Promise<void> {
    const product = new Product();

    Object.assign(product, {
      name,
      brand,
      categories_ids,
      price,
      quantities,
    });

    this.products.push(product);
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
    this.products[findIndex].categories_ids = data.categories_ids;
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