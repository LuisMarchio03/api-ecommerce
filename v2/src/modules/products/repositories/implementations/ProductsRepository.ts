import { Repository, EntityRepository, getRepository } from "typeorm";
import { ICreateProduct } from "../../dtos";
import { Products } from "../../entities/Products";
import { IProductsRepository } from "../IProductsRepository";

@EntityRepository(Products)
export class ProductsRepository implements IProductsRepository {
  private repository: Repository<Products>;

  constructor() {
    this.repository = getRepository(Products);
  }

  async create({
    name,
    description,
    price,
  }: ICreateProduct): Promise<Products> {
    const user = this.repository.create({ name, description, price });

    await this.repository.save(user);

    return user;
  }
  async find(): Promise<Products[]> {
    const user = await this.repository.find();
    return user;
  }
  async findByName(name: string): Promise<Products> {
    const user = await this.repository.findOne(name);
    return user;
  }
  async update(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
