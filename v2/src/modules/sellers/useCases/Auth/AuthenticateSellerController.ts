import { Request, Response } from "express";
import { AuthenticateSellerUseCase } from "./AuthenticateSellerUseCase";

export class AuthenticateSellerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      // Recuperar email e senha
      const { email, password } = request.body;

      // Chamar services
      const authenticateSellerUseCase = new AuthenticateSellerUseCase();

      const token = await authenticateSellerUseCase.execute({
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
