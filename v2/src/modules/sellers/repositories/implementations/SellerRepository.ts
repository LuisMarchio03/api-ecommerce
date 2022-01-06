import { getRepository, Repository } from "typeorm";
import { ICreateSellerDTO } from "../../dtos";
import { Seller } from "../../entities/Seller";
import { ISellerRepository } from "../ISellerRepository";

export class SellerRepository implements ISellerRepository {
  private repository: Repository<Seller>;

  constructor() {
    this.repository = getRepository(Seller);
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
  }: ICreateSellerDTO): Promise<Seller> {
    const seller = this.repository.create({
      name,
      email,
      password,
      phone,
      cpf,
      city,
      address,
      number,
      cep,
    });

    await this.repository.save(seller);

    return seller;
  }

  async find(): Promise<Seller[]> {
    const user = await this.repository.find();
    return user;
  }

  async findByEmail(email: string): Promise<Seller> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findByName(name: string): Promise<Seller> {
    const user = await this.repository.findOne({ name });
    return user;
  }

  async findById(id: string): Promise<Seller> {
    const user = await this.repository.findOne(id);
    return user;
  }
}
