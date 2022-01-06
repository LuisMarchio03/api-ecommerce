import { container } from "tsyringe";
import { Request, Response } from "express";
import { ListAllSellersUseCase } from "./ListAllSellersUseCase";

export class ListAllSellersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllSellersUseCase = container.resolve(ListAllSellersUseCase);
      const results = await listAllSellersUseCase.execute();

      return response.status(201).json(results);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
