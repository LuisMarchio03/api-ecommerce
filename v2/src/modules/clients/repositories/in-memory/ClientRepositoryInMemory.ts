import { ICreateClientDTO } from "../../dtos";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../IClientRepository";

export class ClientRepositoryInMemory implements IClientRepository {
  clients: Client[] = [];

  async create({
    name,
    cpf,
    about,
    email,
    password,
  }: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    Object.assign(client, {
      name,
      cpf,
      about,
      email,
      password,
    });

    this.clients.push(client);

    return client;
  }
  async find(): Promise<Client[]> {
    const clientsAll = this.clients;
    return clientsAll;
  }
  async findByName(name: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}
