import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class ListAllCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const user = this.categoryRepository.find();
    return user;
  }
}
