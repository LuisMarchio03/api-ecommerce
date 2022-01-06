import { Request, Response } from "express";
import { TokenValidateUseCase } from "./TokenValidateUseCase";

export class TokenValidateController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { token } = request.body;

      const tokenValidateUseCase = new TokenValidateUseCase();

      const tokenIsValid = await tokenValidateUseCase.execute(token);

      return response.status(201).json(tokenIsValid);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
