import { ICreateCategoriesDTO } from "../dtos/ICreateCategoriesDTO";
import { IUpdateCategoriesDTO } from "../dtos/IUpdateCategoriesDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  create(data: ICreateCategoriesDTO): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(id: string): Promise<Category>;
  findByName(name: string): Promise<Category>;
  update(id: string, data: IUpdateCategoriesDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { ICategoriesRepository };
