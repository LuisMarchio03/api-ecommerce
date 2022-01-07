import { Seller } from "../entities/Seller";
import { ICreateSellerDTO, IUpdateSellerDTO } from "../dtos";
import { UpdateResult } from "typeorm";

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
  }: ICreateSellerDTO): Promise<Seller>;
  find(): Promise<Seller[]>;
  findByName(name: string): Promise<Seller>;
  findByEmail(email: string): Promise<Seller>;
  findById(id: string): Promise<Seller>;
  update({
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
  }: IUpdateSellerDTO): Promise<Seller>;
}
