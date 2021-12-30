import { getCustomRepository } from "typeorm";
import { Products } from "../../entities/Products";
import { ProductsRepository } from "../../repositories/ProductsRepository";

export class ListAllProductsServices {
  async execute(): Promise<Products[]> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const products = await productsRepository.find();

    return products;
  }
}
