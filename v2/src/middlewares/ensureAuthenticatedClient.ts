import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { Client } from "../modules/clients/entities/Client";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticatedClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const clientRepository = getRepository(Client);

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: client_id } = verify(
      token,
      "4537944749aa8d900ac3d1cdb625fff7"
    ) as IPayload;

    const client = clientRepository.findOne(client_id);

    if (!client) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid token");
  }
}
