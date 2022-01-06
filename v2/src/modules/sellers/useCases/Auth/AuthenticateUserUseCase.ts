import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { ISellerRepository } from "../../repositories/ISellerRepository";
import { Seller } from "../../entities/Seller";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

class AuthenticateUserUseCase {
  constructor(private userRepository = getRepository(Seller)) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuário existe?
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    // Senha está correta?
    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error("Email or password incorrect");
    }

    // Gerar JWT
    const token = sign({}, "4537944749aa8d900ac3d1cdb625fff7", {
      subject: user.id,
      expiresIn: "1d", // 1 Dia
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        email: user.email,
        name: user.name,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
