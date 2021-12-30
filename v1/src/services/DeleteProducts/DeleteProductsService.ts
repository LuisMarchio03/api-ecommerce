import { DeleteResult, getCustomRepository } from "typeorm";
import { ProductsRepository } from "../../repositories/ProductsRepository";

export class DeleteProductsService {
  async execute(id: string): Promise<DeleteResult> {
    const productsRepository = getCustomRepository(ProductsRepository);

    return await productsRepository.delete(id);
  }
}
