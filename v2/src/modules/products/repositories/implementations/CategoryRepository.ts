import { getRepository, Repository } from "typeorm";
import { ICreateCategoryDTO } from "../../dtos";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "./../ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = this.categoryRepository.create({ name, description });

    await this.categoryRepository.save(category);

    return category;
  }

  async find(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.categoryRepository.findOne(name);
    return category;
  }

  async update(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
