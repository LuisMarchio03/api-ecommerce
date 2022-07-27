import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { ICreateProductsDTO } from "@modules/products/dtos/ICreateProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    name,
    brand,
    categories_ids,
    price,
    quantities,
  }: ICreateProductsDTO): Promise<void> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists");
    }

    await this.productsRepository.create({
      name,
      brand,
      categories_ids,
      price,
      quantities,
    });
  }
}

export { CreateProductUseCase };
