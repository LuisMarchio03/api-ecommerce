import { ICreateClientDTO } from "../dtos";
import { Client } from "../entities/Client";

export interface IClientRepository {
  create({
    name,
    cpf,
    about,
    email,
    password,
  }: ICreateClientDTO): Promise<Client>;
  find(): Promise<Client[]>;
  findByName(name: string): Promise<Client>;
  findById(id: string): Promise<Client>;
}
