import { inject, injectable } from "tsyringe";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class ListProductsByCategoryIdUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute(category_id: string) {
    const products = await this.productsRepository.findByCategoryId(
      category_id
    );

    return products;
  }
}
