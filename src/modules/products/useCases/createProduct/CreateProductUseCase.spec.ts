import { AppError } from "@shared/errors/AppError";
import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { CategoriesRepositoryInMemory } from "@modules/products/repositories/in-memory/CategoriesRepositoryInMemory";
import { ReadCategoriesUseCase } from "../readCategories/ReadCategoriesUseCase";

let createProductUseCase: CreateProductUseCase;
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
  });

  it("should be able to create product", async () => {
    await expect(
      createProductUseCase.execute({
        name: "LIVRO 01 - test",
        brand: "BRAND 01 - test",
        price: 100,
        quantities: 10,
        category_id: "2",
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to create product already exists", async () => {
    await createProductUseCase.execute({
      name: "LIVRO 01 - test",
      brand: "BRAND 01 - test",
      price: 100,
      quantities: 10,
      category_id: "2",
    });

    await expect(
      createProductUseCase.execute({
        name: "LIVRO 01 - test",
        brand: "BRAND 01 - test",
        price: 100,
        quantities: 10,
        category_id: "3",
      })
    ).rejects.toEqual(new AppError("Product already exists"));
  });
});
