import { Request, Response } from "express";
import { UpdateProductsServices } from "../../services/UpdateProducts/UpdateProductsServices";

export class UpdateProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { name, description, price } = request.body;

      const updateProductsServices = new UpdateProductsServices();

      await updateProductsServices.execute({
        id,
        name,
        description,
        price,
      });

      return response.status(204).send();
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
