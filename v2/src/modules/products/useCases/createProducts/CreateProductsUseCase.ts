import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { ICreateProduct } from "../../dtos";
import { Products } from "../../entities/Products";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class CreateProductsUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    name,
    description,
    price,
    category_id,
  }: ICreateProduct): Promise<Products> {
    const productsAlreadyExists = await this.productsRepository.findByName(
      name
    );

    if (productsAlreadyExists) {
      throw new Error("Products already exists");
    }

    const products = this.productsRepository.create({
      name,
      description,
      price,
      category_id,
    });

    return products;
  }
}
