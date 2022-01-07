import { getCustomRepository, getRepository, Repository } from "typeorm";
import { ICreateAdminDTO } from "../../dtos";
import { Admin } from "../../entities/Admin";
import { IAdminRepository } from "../IAdminRepository";

export class AdminRepository implements IAdminRepository {
  private repository: Repository<Admin>;

  constructor() {
    this.repository = getRepository(Admin);
  }

  async create({
    name,
    cpf,
    email,
    password,
  }: ICreateAdminDTO): Promise<Admin> {
    const userAdmin = this.repository.create({ name, cpf, email, password });
    await this.repository.save(userAdmin);

    return userAdmin;
  }

  async listAll(): Promise<Admin[]> {
    throw new Error("Method not implemented.");
  }
}
