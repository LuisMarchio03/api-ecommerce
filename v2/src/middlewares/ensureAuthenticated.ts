import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../modules/accounts/entities/User";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const userRepository = getRepository(User);

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "4537944749aa8d900ac3d1cdb625fff7"
    ) as IPayload;

    const user = userRepository.findOne(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
