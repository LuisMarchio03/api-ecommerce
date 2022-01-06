import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateSellerUseCases } from "./CreateSellerUseCases";

export class CreateSellerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const {
        name,
        email,
        password,
        phone,
        cpf,
        city,
        address,
        number,
        cep,
        isAdmin,
      } = request.body;

      const createUserUseCases = container.resolve(CreateSellerUseCases);

      const user = createUserUseCases.execute({
        name,
        email,
        password,
        phone,
        cpf,
        city,
        address,
        number,
        cep,
        isAdmin,
      });

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
