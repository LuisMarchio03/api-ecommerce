import { Request, Response } from "express";
import { DeleteProductsService } from "../../services/DeleteProducts/DeleteProductsService";

export class DeleteProductsController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const deleteProductsService = new DeleteProductsService();

      await deleteProductsService.execute(id);

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
