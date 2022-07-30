import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const useCase = container.resolve(DeleteCategoryUseCase);

    const category = await useCase.execute(id);

    return response.status(200).send(category);
  }
}

export { DeleteCategoryController };
