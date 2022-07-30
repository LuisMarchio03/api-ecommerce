import { AppError } from "@shared/errors/AppError";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) {
      throw new AppError("Product does not exists");
    }

    await this.productsRepository.delete(id);
  }
}

export { DeleteProductUseCase };
