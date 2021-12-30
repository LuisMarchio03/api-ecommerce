import { verify } from "jsonwebtoken";

export class TokenValidateUseCase {
  async execute(token: string) {
    const tokenIsValid = verify(token, "4537944749aa8d900ac3d1cdb625fff7");

    return tokenIsValid;
  }
}
