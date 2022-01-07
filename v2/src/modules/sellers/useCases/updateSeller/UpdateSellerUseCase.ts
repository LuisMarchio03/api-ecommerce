import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { ISellerRepository } from "./../../repositories/ISellerRepository";

@injectable()
export class UpdateSellerUseCase {
  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
  ) {}

  async execute({
    id,
    name,
    email,
    password,
    phone,
    cpf,
    city,
    address,
    number,
    cep,
  }) {
    const userExists = await this.sellerRepository.findById(id);

    if (!userExists) {
      throw new Error("User does not exists");
    }

    const passwordHash = await hash(password, 8);

    const updatedSeller = await this.sellerRepository.update({
      id,
      name,
      email,
      password: passwordHash,
      phone,
      cpf,
      city,
      address,
      number,
      cep,
    });

    return updatedSeller;
  }
}
