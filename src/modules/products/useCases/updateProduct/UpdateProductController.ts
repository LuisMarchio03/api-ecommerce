import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductUseCase } from "./UpdateProductUseCase";

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, brand, category_id, price, quantities } = request.body;
    const { id } = request.params;

    const useCase = container.resolve(UpdateProductUseCase);

    await useCase.execute(id, {
      name,
      brand,
      category_id,
      price,
      quantities,
    });

    return response.status(200).send();
  }
}

export { UpdateProductController };
