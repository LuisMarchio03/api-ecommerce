import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { ICreateProductsDTO } from "@modules/products/dtos/ICreateProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    name,
    brand,
    category_id,
    price,
    quantities,
  }: ICreateProductsDTO): Promise<Product> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists");
    }

    return await this.productsRepository.create({
      name,
      brand,
      category_id,
      price,
      quantities,
    });
  }
}

export { CreateProductUseCase };
