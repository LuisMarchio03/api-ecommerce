import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

export class CreateProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description, price } = request.body;

      const createProductsUseCase = container.resolve(CreateProductsUseCase);

      const products = await createProductsUseCase.execute({
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
