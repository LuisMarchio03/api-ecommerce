import { User } from "../../entities/User";
import { hash } from "bcryptjs";
import { ICreateUser } from "../../dtos";
import { injectable, inject } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class CreateUserUseCases {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    phone,
    cpf,
    city,
    address,
    number,
    cep,
    isAdmin,
  }: ICreateUser): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = this.userRepository.create({
      name,
      email,
      password: passwordHash,
      phone,
      cpf,
      city,
      address,
      number,
      cep,
      isAdmin,
    });

    return user;
  }
}
