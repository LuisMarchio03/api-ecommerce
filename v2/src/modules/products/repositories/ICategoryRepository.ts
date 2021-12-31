import { ICreateCategoryDTO } from "../dtos";
import { Category } from "../entities/Category";

export interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<Category>;
  find(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
  update(id: string): Promise<void>;
  delete(id: string): Promise<void>;
}
