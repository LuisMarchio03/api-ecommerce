import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListAllCategoriesUseCase } from "./ListAllCategoriesUseCase";

export class ListAllCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllCategoriesUseCase = container.resolve(
        ListAllCategoriesUseCase
      );

      const categories = await listAllCategoriesUseCase.execute();

      return response.status(201).json(categories);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
