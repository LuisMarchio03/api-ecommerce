import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

export class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllUsersUseCase = container.resolve(ListAllUsersUseCase);
      const results = await listAllUsersUseCase.execute();

      return response.status(201).json(results);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
