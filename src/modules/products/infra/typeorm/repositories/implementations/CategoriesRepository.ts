import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";

import { ICreateCategoriesDTO } from "@modules/products/dtos/ICreateCategoriesDTO";
import { IUpdateCategoriesDTO } from "@modules/products/dtos/IUpdateCategoriesDTO";
import { ICategoriesRepository } from "@modules/products/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoriesDTO): Promise<Category> {
    const category = this.repository.create({ name, description });
    return await this.repository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Category> {
    return await this.repository.findOne(id);
  }

  async findByName(name: string): Promise<Category> {
    return await this.repository.findOne({ name });
  }

  async update(id: string, data: IUpdateCategoriesDTO): Promise<void> {
    await this.repository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { CategoriesRepository };
