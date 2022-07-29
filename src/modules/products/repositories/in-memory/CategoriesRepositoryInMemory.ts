import { ICreateCategoriesDTO } from "@modules/products/dtos/ICreateCategoriesDTO";
import { IUpdateCategoriesDTO } from "@modules/products/dtos/IUpdateCategoriesDTO";
import { Category } from "@modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];

  async create({ name, description }: ICreateCategoriesDTO): Promise<Category> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
    return category;
  }

  async findById(id: string): Promise<Category> {
    return this.categories.find((category) => category.id === id);
  }

  async findAll(): Promise<Category[]> {
    return this.categories;
  }

  async update(id: string, data: IUpdateCategoriesDTO): Promise<void> {
    const findIndex = this.categories.findIndex(
      (category) => category.id === id
    );

    this.categories[findIndex].name = data.name;
    this.categories[findIndex].description = data.description;
  }

  async delete(id: string): Promise<void> {
    this.categories.filter((category) => category.id === id);
  }

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }
}

export { CategoriesRepositoryInMemory };
