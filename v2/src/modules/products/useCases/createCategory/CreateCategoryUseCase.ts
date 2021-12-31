import { injectable, inject } from "tsyringe";
import { ICreateCategoryDTO } from "../../dtos";
import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    const category = await this.categoryRepository.create({
      name,
      description,
    });

    return category;
  }
}
