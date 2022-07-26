import { Category } from "@modules/products/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/products/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ReadCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    return await this.categoriesRepository.findAll();
  }
}

export { ReadCategoriesUseCase };
