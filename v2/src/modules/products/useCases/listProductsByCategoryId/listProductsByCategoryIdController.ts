import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListProductsByCategoryIdUseCase } from "./listProductsByCategoryIdUseCase";

export class listProductsByCategoryIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { category_id } = request.query;

      const listProductsByCategoryIdUseCase = container.resolve(
        ListProductsByCategoryIdUseCase
      );

      const products = await listProductsByCategoryIdUseCase.execute(
        category_id as string
      );

      return response.status(201).json(products);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
