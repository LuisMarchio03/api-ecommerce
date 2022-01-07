import { hash } from "bcryptjs";
import { getRepository, Repository } from "typeorm";
import { ICreateClientDTO } from "../../dtos";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../IClientRepository";

export class ClientRepository implements IClientRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async create({
    name,
    cpf,
    about,
    email,
    password,
  }: ICreateClientDTO): Promise<Client> {
    const client = this.repository.create({
      name,
      cpf,
      about,
      email,
      password,
    });

    await this.repository.save(client);

    return client;
  }
  find(): Promise<Client[]> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}
