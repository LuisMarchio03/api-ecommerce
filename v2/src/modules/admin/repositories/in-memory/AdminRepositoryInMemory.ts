import { ICreateAdminDTO } from "../../dtos";
import { Admin } from "../../entities/Admin";
import { IAdminRepository } from "../IAdminRepository";

export class AdminRepositoryInMemory implements IAdminRepository {
  admins: Admin[] = [];

  async create({
    name,
    cpf,
    email,
    password,
  }: ICreateAdminDTO): Promise<Admin> {
    const admin = new Admin();

    Object.assign(admin, {
      name,
      cpf,
      email,
      password,
    });

    this.admins.push(admin);

    return admin;
  }

  async listAll(): Promise<Admin[]> {
    throw new Error("Method not implemented.");
  }
}
