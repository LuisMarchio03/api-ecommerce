import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllClientsUseCase } from "./ListAllClientsUseCase";

export class ListAllClientsController {
  async handle(request: Request, response: Response) {
    try {
      const listAllClientsUseCase = container.resolve(ListAllClientsUseCase);
      const clients = listAllClientsUseCase.execute();

      return clients;
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
