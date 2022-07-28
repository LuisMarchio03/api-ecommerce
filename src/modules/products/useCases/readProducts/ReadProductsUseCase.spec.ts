import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";
import { ReadProductsUseCase } from "./ReadProductsUseCase";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let readProductsUseCase: ReadProductsUseCase;
let createProductUseCase: CreateProductUseCase;

describe("Read Products", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    readProductsUseCase = new ReadProductsUseCase(productsRepositoryInMemory);
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
  });

  it("should be able to read all products", async () => {
    await createProductUseCase.execute({
      name: "LIVRO 01 - test",
      brand: "BRAND 01 - test",
      price: 100,
      quantities: 10,
      category_id: "2",
    });

    await createProductUseCase.execute({
      name: "LIVRO 02 - test",
      brand: "BRAND 02 - test",
      price: 150,
      quantities: 5,
      category_id: "5",
    });

    const products = await readProductsUseCase.execute();
    expect(products).toHaveLength(2);
  });
});
