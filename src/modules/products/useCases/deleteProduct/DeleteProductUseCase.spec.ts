import { Category } from "@modules/products/infra/typeorm/entities/Category";
import { AppError } from "@shared/errors/AppError";
import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";

import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

let createProductUseCase: CreateProductUseCase;
let deleteProductUseCase: DeleteProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Delete Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    deleteProductUseCase = new DeleteProductUseCase(productsRepositoryInMemory);
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
  });

  it("should be able to delete product", async () => {
    const { products } = productsRepositoryInMemory;

    products.push({
      id: "1",
      name: "LIVRO 01 - test",
      brand: "BRAND 01 - test",
      price: 100,
      quantities: 10,
      category_id: "2",
      category: new Category(),
      created_at: new Date(),
      product_id_stripe: null,
    });

    await expect(deleteProductUseCase.execute("1")).resolves.not.toThrow();
  });

  it("should not be able to delete product does not exists", async () => {
    await expect(deleteProductUseCase.execute("2")).rejects.toEqual(
      new AppError("Product does not exists")
    );
  });
});
