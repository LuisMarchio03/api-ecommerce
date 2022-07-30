import { CategoriesRepositoryInMemory } from "@modules/products/repositories/in-memory/CategoriesRepositoryInMemory";
import { Category } from "@modules/products/infra/typeorm/entities/Category";
import { AppError } from "@shared/errors/AppError";

import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let deleteCategoryUseCase: DeleteCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Delete Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    deleteCategoryUseCase = new DeleteCategoryUseCase(
      categoriesRepositoryInMemory
    );
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to delete category", async () => {
    const { categories } = categoriesRepositoryInMemory;

    categories.push({
      id: "1",
      name: "Category 1",
      description: "Description 1",
      created_at: new Date(),
    });

    await expect(deleteCategoryUseCase.execute("1")).resolves.not.toThrow();
  });

  it("should not be able to delete category does not exists", async () => {
    await expect(deleteCategoryUseCase.execute("2")).rejects.toEqual(
      new AppError("Category does not exists")
    );
  });
});
