import { getRepository, Repository } from "typeorm";
import { ICreateUser } from "../../dtos";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
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
    const user = this.repository.create({
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
    });

    await this.repository.save(user);

    return user;
  }

  async find(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}
