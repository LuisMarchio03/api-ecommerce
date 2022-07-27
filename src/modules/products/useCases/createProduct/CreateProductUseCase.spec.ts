import { AppError } from "@shared/errors/AppError";
import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CategoriesRepositoryInMemory } from "@modules/products/repositories/in-memory/CategoriesRepositoryInMemory";
import { ReadCategoriesUseCase } from "../readCategories/ReadCategoriesUseCase";

let createProductUseCase: CreateProductUseCase;
let createCategoryUseCase: CreateCategoryUseCase;
let readCategoriesUseCase: ReadCategoriesUseCase;

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
    readCategoriesUseCase = new ReadCategoriesUseCase(
      categoriesRepositoryInMemory
    );
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create product", async () => {
    await createCategoryUseCase.execute({
      name: "Category test 01",
      description: "Description - Category test 01",
    });
    await createCategoryUseCase.execute({
      name: "Category test 02",
      description: "Description - Category test 02",
    });
    await createCategoryUseCase.execute({
      name: "Category test 03",
      description: "Description - Category test 03",
    });

    const categories = await readCategoriesUseCase.execute();

    await expect(
      createProductUseCase.execute({
        name: "LIVRO 01 - test",
        brand: "BRAND 01 - test",
        price: 100,
        quantities: 10,
        categories_ids: [
          categories[0]?.id,
          categories[1]?.id,
          categories[2]?.id,
        ],
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to create product already exists", async () => {
    await createCategoryUseCase.execute({
      name: "Category test 01",
      description: "Description - Category test 01",
    });
    await createCategoryUseCase.execute({
      name: "Category test 02",
      description: "Description - Category test 02",
    });
    await createCategoryUseCase.execute({
      name: "Category test 03",
      description: "Description - Category test 03",
    });

    const categories = await readCategoriesUseCase.execute();

    await createProductUseCase.execute({
      name: "LIVRO 01 - test",
      brand: "BRAND 01 - test",
      price: 100,
      quantities: 10,
      categories_ids: [categories[0]?.id, categories[1]?.id, categories[2]?.id],
    });

    await expect(
      createProductUseCase.execute({
        name: "LIVRO 01 - test",
        brand: "BRAND 01 - test",
        price: 100,
        quantities: 10,
        categories_ids: [
          categories[0]?.id,
          categories[1]?.id,
          categories[2]?.id,
        ],
      })
    ).rejects.toEqual(new AppError("Product already exists"));
  });
});
