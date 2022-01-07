import { inject, injectable } from "tsyringe";
import { IClientRepository } from "./../../repositories/IClientRepository";

@injectable()
export class ListAllClientsUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute() {
    const clients = await this.clientRepository.find();
    return clients;
  }
}
