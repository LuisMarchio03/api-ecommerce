import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { inject, injectable } from "tsyringe";

@injectable()
class ReadProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<Product> {
    return await this.productsRepository.findById(id);
  }
}

export { ReadProductUseCase };
