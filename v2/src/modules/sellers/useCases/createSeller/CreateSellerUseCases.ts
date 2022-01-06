import { Seller } from "../../entities/Seller";
import { hash } from "bcryptjs";
import { ICreateSellerDTO } from "../../dtos";
import { injectable, inject } from "tsyringe";
import { ISellerRepository } from "../../repositories/ISellerRepository";

@injectable()
export class CreateSellerUseCases {
  constructor(
    @inject("SellerRepository")
    private sellerRepository: ISellerRepository
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
  }: ICreateSellerDTO): Promise<Seller> {
    const userAlreadyExists = await this.sellerRepository.findByName(name);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = this.sellerRepository.create({
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
