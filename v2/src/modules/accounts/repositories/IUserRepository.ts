import { User } from "../entities/User";
import { ICreateUser } from "../dtos";

export interface IUserRepository {
  create({
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
  }: ICreateUser): Promise<User>;
  find(): Promise<User[]>;
  findByName(name: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}
