import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Request, Response } from "express";

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, description } = request.body;

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

      const category = await createCategoryUseCase.execute({
        name,
        description,
      });

      return response.json(category);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
