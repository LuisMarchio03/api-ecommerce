import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class DeleteProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
