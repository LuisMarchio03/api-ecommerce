import { AuthenticateUserServices } from "./../../services/Auth/AuthenticateUserServices";
import { Request, Response } from "express";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Recuperar email e senha
      const { email, password } = request.body;

      // Chamar services
      const authenticateUserServices = new AuthenticateUserServices();

      const token = await authenticateUserServices.execute({
        email,
        password,
      });

      // Return token
      return response.status(201).json({ token });
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
