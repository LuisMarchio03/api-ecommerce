import { ICategoriesRepository } from "@modules/products/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const categoryExists = await this.categoriesRepository.findById(id);

    if (!categoryExists) {
      throw new AppError("Category does not exists");
    }

    await this.categoriesRepository.delete(id);
  }
}

export { DeleteCategoryUseCase };
