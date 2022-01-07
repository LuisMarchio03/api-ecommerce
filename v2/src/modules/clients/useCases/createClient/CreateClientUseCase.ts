import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ICreateClientDTO } from "../../dtos";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute({
    name,
    cpf,
    about,
    email,
    password,
  }: ICreateClientDTO): Promise<Client> {
    // const clientAlreadyExists = await this.clientRepository.findByName()

    const passwordHash = await hash(password, 8);

    const client = await this.clientRepository.create({
      name,
      cpf,
      about,
      email,
      password: passwordHash,
    });

    return client;
  }
}
