import { AppError } from "@shared/errors/AppError";
import { ICreateCategoriesDTO } from "@modules/products/dtos/ICreateCategoriesDTO";
import { CategoriesRepositoryInMemory } from "@modules/products/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();

    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create category", async () => {
    await expect(
      createCategoryUseCase.execute({
        name: "Category test 01",
        description: "Description - Category test 01",
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to create category already exists", async () => {
    await createCategoryUseCase.execute({
      name: "Category test 01",
      description: "Description - Category test 01",
    });

    await expect(
      createCategoryUseCase.execute({
        name: "Category test 01",
        description: "Description - Category test 01",
      })
    ).rejects.toEqual(new AppError("Category already exists"));
  });
});
