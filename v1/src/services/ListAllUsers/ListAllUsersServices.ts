import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

export class ListAllUsersServices {
  async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    return users;
  }
}
