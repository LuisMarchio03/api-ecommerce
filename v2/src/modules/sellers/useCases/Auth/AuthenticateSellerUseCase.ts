import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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

class AuthenticateSellerUseCase {
  constructor(private sellerRepository = getRepository(Seller)) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuário existe?
    const seller = await this.sellerRepository.findOne({ email });

    if (!seller) {
      throw new Error("Email or password incorrect");
    }

    // Senha está correta?
    const passwordMath = await compare(password, seller.password);

    if (!passwordMath) {
      throw new Error("Email or password incorrect");
    }

    // Gerar JWT
    const token = sign({}, "4537944749aa8d900ac3d1cdb625fff7", {
      subject: seller.id,
      expiresIn: "1d", // 1 Dia
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        email: seller.email,
        name: seller.name,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateSellerUseCase };
