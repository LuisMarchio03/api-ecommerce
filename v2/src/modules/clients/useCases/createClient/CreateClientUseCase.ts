import { ICreateClientDTO } from "../../dtos";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../../repositories/IClientRepository";

export class CreateClientUseCase {
  constructor(private clientRepository: IClientRepository) {}

  async execute({ name, cpf, about, email, password }: ICreateClientDTO) {}
}
