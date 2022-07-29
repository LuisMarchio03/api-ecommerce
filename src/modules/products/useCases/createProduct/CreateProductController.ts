import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      brand,
      category_id,
      price,
      quantities,
      product_id_stripe,
    } = request.body;

    const useCase = container.resolve(CreateProductUseCase);

    const product = await useCase.execute({
      name,
      brand,
      category_id,
      price,
      quantities,
      product_id_stripe,
    });

    return response.status(201).send(product);
  }
}

export { CreateProductController };
