import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

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

export class AuthenticateUserServices {
  async execute({ email, password }: IRequest) {
    const userRepository = getCustomRepository(UserRepository);

    // Usuário existe?
    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    // Senha está correta?
    const passwordMath = compare(password, user.password);

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

    // Return JWT
    return tokenReturn;
  }
}
