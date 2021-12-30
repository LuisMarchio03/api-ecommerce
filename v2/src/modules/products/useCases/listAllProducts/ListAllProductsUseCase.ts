import { inject, injectable } from "tsyringe";
import { Products } from "../../entities/Products";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class ListAllProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productRepository: IProductsRepository
  ) {}

  async execute(): Promise<Products[]> {
    const products = await this.productRepository.find();
    return products;
  }
}
