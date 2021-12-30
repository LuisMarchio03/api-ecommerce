import { injectable, inject } from "tsyringe";

import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class ListAllUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
