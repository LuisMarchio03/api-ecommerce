import { getRepository, Repository, UpdateResult } from "typeorm";
import { ICreateSellerDTO, IUpdateSellerDTO } from "../../dtos";
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
    const seller = await this.repository.find();
    return seller;
  }

  async findByEmail(email: string): Promise<Seller> {
    const seller = await this.repository.findOne({ email });
    return seller;
  }

  async findByName(name: string): Promise<Seller> {
    const seller = await this.repository.findOne({ name });
    return seller;
  }

  async findById(id: string): Promise<Seller> {
    const seller = await this.repository.findOne(id);
    return seller;
  }

  async update({
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
  }: IUpdateSellerDTO): Promise<Seller> {
    const seller = await this.repository
      .createQueryBuilder()
      .update(Seller)
      .set({ name, email, password, phone, cpf, city, address, number, cep })
      .where("id = :id", { id })
      .execute();

    const results = await this.repository.findOne(id);

    return results;
  }
}
