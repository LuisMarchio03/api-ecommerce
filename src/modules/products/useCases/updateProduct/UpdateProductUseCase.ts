import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { IUpdateProductsDTO } from "@modules/products/dtos/IUpdateProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string, data: IUpdateProductsDTO): Promise<void> {
    const { name, brand, price, quantities, category_id } = data;

    const product = await this.productsRepository.findById(id);

    if (!product) {
      throw new AppError("Product does not exists");
    }

    await this.productsRepository.update(id, {
      name,
      brand,
      price,
      quantities,
      category_id,
    });
  }
}

export { UpdateProductUseCase };
