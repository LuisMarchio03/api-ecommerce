import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, brand, categories_ids, price, quantities } = request.body;

    const useCase = container.resolve(CreateProductUseCase);

    await useCase.execute({
      name,
      brand,
      categories_ids,
      price,
      quantities,
    });

    return response.status(201).send();
  }
}

export { CreateProductController };
