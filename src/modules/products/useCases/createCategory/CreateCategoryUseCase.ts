import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

import { ICreateCategoriesDTO } from "@modules/products/dtos/ICreateCategoriesDTO";
import { ICategoriesRepository } from "@modules/products/repositories/ICategoriesRepository";

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, description }: ICreateCategoriesDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    await this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
