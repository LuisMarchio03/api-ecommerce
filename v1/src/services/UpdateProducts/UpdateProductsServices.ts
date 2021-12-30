import { getCustomRepository, UpdateResult } from "typeorm";
import { IUpdateProducts } from "../../dtos";
import { ProductsRepository } from "../../repositories/ProductsRepository";

export class UpdateProductsServices {
  async execute({
    name,
    description,
    price,
    id,
  }: IUpdateProducts): Promise<UpdateResult> {
    const productsRepository = getCustomRepository(ProductsRepository);

    return await productsRepository.update(id, { name, description, price });
  }
}
