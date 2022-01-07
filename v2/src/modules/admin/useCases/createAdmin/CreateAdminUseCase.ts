import { ICreateAdminDTO } from "./../../dtos/index";
import { IAdminRepository } from "../../repositories/IAdminRepository";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

@injectable()
export class CreateAdminUseCase {
  constructor(
    @inject("AdminRepository")
    private adminRepository: IAdminRepository
  ) {}

  async execute({ name, cpf, email, password }: ICreateAdminDTO) {
    const passwordHash = await hash(password, 8);

    const userAdmin = this.adminRepository.create({
      name,
      cpf,
      email,
      password: passwordHash,
    });

    return userAdmin;
  }
}
