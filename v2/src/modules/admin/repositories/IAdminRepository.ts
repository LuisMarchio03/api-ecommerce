import { ICreateAdminDTO } from "../dtos";
import { Admin } from "./../entities/Admin";

export interface IAdminRepository {
  create({ name, cpf, email, password }: ICreateAdminDTO): Promise<Admin>;
  listAll(): Promise<Admin[]>;
}
