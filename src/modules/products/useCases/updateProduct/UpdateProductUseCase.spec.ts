import { Category } from "@modules/products/infra/typeorm/entities/Category";
import { AppError } from "@shared/errors/AppError";
import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { UpdateProductUseCase } from "./UpdateProductUseCase";
import { CreateProductUseCase } from "../createProduct/CreateProductUseCase";

let createProductUseCase: CreateProductUseCase;
let updateProductUseCase: UpdateProductUseCase;
let productsRepositoryInMemory: ProductsRepositoryInMemory;

describe("Update Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    updateProductUseCase = new UpdateProductUseCase(productsRepositoryInMemory);
    createProductUseCase = new CreateProductUseCase(productsRepositoryInMemory);
  });

  it("should be able to update product", async () => {
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

    await expect(
      updateProductUseCase.execute("1", {
        name: "LIVRO 01 UPDATED - test ",
        brand: "BRAND 01 UPDATED - test",
        price: 100,
        quantities: 10,
        category_id: "2",
      })
    ).resolves.not.toThrow();
  });

  it("should not be able to update product does not exists", async () => {
    await expect(
      updateProductUseCase.execute("2", {
        name: "LIVRO 02 - test",
        brand: "BRAND 02 - test",
        price: 100,
        quantities: 10,
        category_id: "2",
      })
    ).rejects.toEqual(new AppError("Product does not exists"));
  });
});
