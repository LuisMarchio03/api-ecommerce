import { Seller } from "../entities/Seller";
import { ICreateSellerDTO } from "../dtos";

export interface ISellerRepository {
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
  }: ICreateSellerDTO): Promise<Seller>;
  find(): Promise<Seller[]>;
  findByName(name: string): Promise<Seller>;
  findByEmail(email: string): Promise<Seller>;
  findById(id: string): Promise<Seller>;
}
