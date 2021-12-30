import { Request, Response } from "express";
import { CreateUserService } from "../../services/CreateUser/CreateUserService";

export class CreateUserController {
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

      const createUserService = new CreateUserService();

      const user = createUserService.execute({
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
