import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteProductsUseCase } from "./DeleteProductsUseCase";

export class DeleteProductsController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const deleteProductsUseCase = container.resolve(DeleteProductsUseCase);

      await deleteProductsUseCase.execute(id);

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
