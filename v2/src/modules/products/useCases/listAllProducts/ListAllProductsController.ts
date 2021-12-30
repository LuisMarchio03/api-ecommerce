import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListAllProductsUseCase } from "./ListAllProductsUseCase";

export class ListAllProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllProductsUseCase = container.resolve(ListAllProductsUseCase);
      const results = await listAllProductsUseCase.execute();

      return response.status(200).json(results);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
