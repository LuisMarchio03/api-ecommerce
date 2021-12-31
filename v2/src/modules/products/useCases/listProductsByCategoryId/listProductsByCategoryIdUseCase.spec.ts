import { ProductsRepositoryInMemory } from "../../repositories/in-Memory/ProductsRepositoryInMemory";
import { CreateProductsUseCase } from "../createProducts/CreateProductsUseCase";
import { ListProductsByCategoryIdUseCase } from "./listProductsByCategoryIdUseCase";

let listProductsByCategoryIdUseCase: ListProductsByCategoryIdUseCase;
let createProductsUseCase: CreateProductsUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("List Product By CategoryId", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    listProductsByCategoryIdUseCase = new ListProductsByCategoryIdUseCase(
      productsRepositoryInMemory
    );
    createProductsUseCase = new CreateProductsUseCase(
      productsRepositoryInMemory
    );
  });

  it("should be able list products by category_id", async () => {
    const product = await createProductsUseCase.execute({
      name: "New Product",
      category_id: "category_id",
      description: "Description",
      price: 120,
    });

    const category_id = "category_id";
    const results = await listProductsByCategoryIdUseCase.execute(category_id);

    expect(results).toEqual(product);
  });
});
