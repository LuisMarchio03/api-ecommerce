import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  //Bearer 43g4jhu3ghjghjgad54sdadfdvbvcb
  //[0] Bearer
  //[1] 43g4jhu3ghjghjgad54sdadfdvbvcb
  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "4537944749aa8d900ac3d1cdb625fff7"
    ) as IPayload;

    const userRepository = getCustomRepository(UserRepository);
    const user = userRepository.findOne(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
