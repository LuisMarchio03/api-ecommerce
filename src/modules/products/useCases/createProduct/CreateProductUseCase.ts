import { Product } from "@modules/products/infra/typeorm/entities/Product";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { ICreateProductsDTO } from "@modules/products/dtos/ICreateProductsDTO";
import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";

const stripe = require("stripe")(
  "sk_test_51JUeSWLDVS2DCd594hjW26egQ11ULBkUMfjM1coz7n7FbG5byI0SvumEYhPOdJO65LtxhlThaR4ls1pZfSclyZz800juaS8tvG"
);

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository
  ) {}

  async execute({
    name,
    brand,
    category_id,
    price,
    quantities,
  }: ICreateProductsDTO): Promise<Product> {
    const productAlreadyExists = await this.productsRepository.findByName(name);

    if (productAlreadyExists) {
      throw new AppError("Product already exists");
    }

    const productStripe = await stripe.products.create({
      name,
      default_price_data: {
        unit_amount: price,
        currency: "usd",
      },
      expand: ["default_price"],
    });
    const product_id_stripe = productStripe?.body?.id;

    return await this.productsRepository.create({
      name,
      brand,
      category_id,
      price,
      quantities,
    });
  }
}

export { CreateProductUseCase };
