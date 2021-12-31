import { ProductsRepositoryInMemory } from "../../repositories/in-Memory/ProductsRepositoryInMemory";
import { CreateProductsUseCase } from "./CreateProductsUseCase";

let createProductsUseCase: CreateProductsUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Create Products", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    createProductsUseCase = new CreateProductsUseCase(
      productsRepositoryInMemory
    );
  });

  it("should be able to create new products", async () => {
    const product = await createProductsUseCase.execute({
      name: "New Product",
      category_id: "category_id",
      description: "Description",
      price: 120,
    });

    expect(product).toHaveProperty("id");
  });
});
