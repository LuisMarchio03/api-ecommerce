import { Request, Response } from "express";
import { CreateProductsServices } from "../../services/CreateProducts/CreateProductsServices";

export class CreateProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, price } = request.body;

      const createProductsServices = new CreateProductsServices();

      const products = await createProductsServices.execute({
        name,
        description,
        price,
      });

      return response.status(200).json(products);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
