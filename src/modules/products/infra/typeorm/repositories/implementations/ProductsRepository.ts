import {
  FindManyOptions,
  FindOneOptions,
  getRepository,
  Repository,
} from "typeorm";
import { Product } from "../../entities/Product";

import { ICreateProductsDTO } from "@modules/products/dtos/ICreateProductsDTO";
import { IUpdateProductsDTO } from "@modules/products/dtos/IUpdateProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Category } from "../../entities/Category";

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({
    name,
    brand,
    price,
    quantities,
    category_id,
    product_id_stripe,
  }: ICreateProductsDTO): Promise<Product> {
    const category = this.repository.create({
      product_id_stripe,
      name,
      brand,
      price,
      quantities,
      category_id,
    });
    return await this.repository.save(category);
  }

  async findAll(): Promise<Product[]> {
    return await this.repository.find({
      relations: ["category"],
    });
  }

  async findById(id: string): Promise<Product> {
    return await this.repository.findOne({
      where: {
        id,
      },
      relations: ["category"],
    });
  }

  async findByName(name: string): Promise<Product> {
    return await this.repository.findOne({ name });
  }

  async update(id: string, data: IUpdateProductsDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { ProductsRepository };
