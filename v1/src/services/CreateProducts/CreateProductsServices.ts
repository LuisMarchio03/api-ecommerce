import { getCustomRepository } from "typeorm";
import { ICreateProduct } from "../../dtos";
import { Products } from "../../entities/Products";
import { ProductsRepository } from "../../repositories/ProductsRepository";

export class CreateProductsServices {
  constructor(
    private productsRepository = getCustomRepository(ProductsRepository)
  ) {}

  async execute({
    name,
    description,
    price,
  }: ICreateProduct): Promise<Products> {
    const productsAlreadyExists = await this.productsRepository.findOne({
      name,
    });

    if (productsAlreadyExists) {
      throw new Error("Products already exists");
    }

    const products = this.productsRepository.create({
      name,
      description,
      price,
    });

    await this.productsRepository.save(products);

    return products;
  }
}
