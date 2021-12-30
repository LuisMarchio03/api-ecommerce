import { Request, Response } from "express";
import { TokenValidateServices } from "../../services/Auth/TokenValidateServices";

export class TokenValidateController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { token } = request.body;

      const tokenValidateServices = new TokenValidateServices();

      const tokenIsValid = await tokenValidateServices.execute(token);

      return response.status(201).json(tokenIsValid);
    } catch (err) {
      return response.status(400).json({ error: true, message: err.message });
    }
  }
}
