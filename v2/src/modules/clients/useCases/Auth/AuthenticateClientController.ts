import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Recuperar email e senha
      const { email, password } = request.body;

      // Chamar services
      const authenticateClientUseCase = new AuthenticateClientUseCase();

      const token = await authenticateClientUseCase.execute({
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