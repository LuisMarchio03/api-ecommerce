import { ICreateSellerDTO, IUpdateSellerDTO } from "../../dtos";
import { Seller } from "../../entities/Seller";
import { ISellerRepository } from "../ISellerRepository";

export class SellerRepositoryInMemory implements ISellerRepository {
  sellers: Seller[] = [];

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
    const seller = new Seller();

    Object.assign(seller, {
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

    this.sellers.push(seller);

    return seller;
  }
  find(): Promise<Seller[]> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<Seller> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<Seller> {
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<Seller> {
    return this.sellers.find((seller) => seller.id === id);
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
    const seller = this.sellers.find((seller) => seller.id === id);

    seller.name = name;
    seller.email = email;
    seller.password = password;
    seller.phone = phone;
    seller.cpf = cpf;
    seller.city = city;
    seller.address = address;
    seller.number = number;
    seller.cep = cep;

    return seller;
  }
}
