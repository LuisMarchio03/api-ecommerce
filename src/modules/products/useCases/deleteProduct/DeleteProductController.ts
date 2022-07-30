import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProductUseCase } from "./DeleteProductUseCase";

class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const useCase = container.resolve(DeleteProductUseCase);

    const product = await useCase.execute(id);

    return response.status(200).send(product);
  }
}

export { DeleteProductController };
