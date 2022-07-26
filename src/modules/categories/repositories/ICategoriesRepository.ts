import { ICreateCategoriesDTO } from "../dtos/ICreateCategoriesDTO";
import { Categories } from "../infra/typeorm/entities/Categories";

interface ICategoriesRepository {
  create(data: ICreateCategoriesDTO): Promise<void>;
  findAll(): Promise<Categories>;
  findById(id: string): Promise<Categories>;
}

export { ICategoriesRepository };
