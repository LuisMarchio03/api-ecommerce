import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, cpf, about, email, password } = request.body;

      const createClientUseCase = container.resolve(CreateClientUseCase);

      const client = await createClientUseCase.execute({
        name,
        cpf,
        about,
        email,
        password,
      });

      return response.status(201).json(client);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
