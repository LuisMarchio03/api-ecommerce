import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";
import { ReadProductUseCase } from "./ReadProductUseCase";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let readProductUseCase: ReadProductUseCase;
let createProductUseCase: CreateProductUseCase;

describe("Read Products", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    readProductUseCase = new ReadProductUseCase(productsRepositoryInMemory);
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
  });

  it("should be able to read product", async () => {
    const createFirstProduct = await createProductUseCase.execute({
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

    const products = await readProductUseCase.execute(createFirstProduct?.id);

    expect(products).toBeTruthy();
    expect(products.name).toEqual("LIVRO 01 - test");
    expect(products.brand).toEqual("BRAND 01 - test");
  });
});
