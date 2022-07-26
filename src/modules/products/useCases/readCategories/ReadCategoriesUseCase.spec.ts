import { CategoriesRepositoryInMemory } from "@modules/products/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { ReadCategoriesUseCase } from "./ReadCategoriesUseCase";

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let readCategoriesUseCase: ReadCategoriesUseCase;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Read Categories", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();

    readCategoriesUseCase = new ReadCategoriesUseCase(
      categoriesRepositoryInMemory
    );

    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to read all categories", async () => {
    await createCategoryUseCase.execute({
      name: "Category test 01",
      description: "Description - Category test 01",
    });

    await createCategoryUseCase.execute({
      name: "Category test 02",
      description: "Description - Category test 02",
    });

    const categories = await readCategoriesUseCase.execute();
    expect(categories).toHaveLength(2);
  });
});
