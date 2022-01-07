import { CreateAdminUseCase } from "./CreateAdminUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateAdminController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, cpf, email, password } = request.body;

      const createAdminUseCase = container.resolve(CreateAdminUseCase);

      const userAdmin = await createAdminUseCase.execute({
        name,
        cpf,
        email,
        password,
      });

      return response.status(201).json(userAdmin);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
