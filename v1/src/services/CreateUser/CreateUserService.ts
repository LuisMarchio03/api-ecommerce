import { UserRepository } from "../../repositories/UserRepository";
import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { hash } from "bcryptjs";

interface IRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  city: string;
  address: string;
  number: string;
  cep: string;
  isAdmin: boolean;
}

export class CreateUserService {
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
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({ name });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = userRepository.create({
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

    await userRepository.save(user);

    return user;
  }
}
