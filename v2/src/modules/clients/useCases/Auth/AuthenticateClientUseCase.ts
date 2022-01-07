import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Client } from "../../entities/Client";

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

class AuthenticateClientUseCase {
  constructor(private clientRepository = getRepository(Client)) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Usuário existe?
    const client = await this.clientRepository.findOne({ email });

    if (!client) {
      throw new Error("Email or password incorrect");
    }

    // Senha está correta?
    const passwordMath = await compare(password, client.password);

    if (!passwordMath) {
      throw new Error("Email or password incorrect");
    }

    // Gerar JWT
    const token = sign({}, "4537944749aa8d900ac3d1cdb625fff7", {
      subject: client.id,
      expiresIn: "1d", // 1 Dia
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        email: client.email,
        name: client.name,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateClientUseCase };
