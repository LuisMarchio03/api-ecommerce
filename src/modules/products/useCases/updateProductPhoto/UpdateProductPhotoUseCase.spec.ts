import { Category } from "@modules/products/infra/typeorm/entities/Category";
import { ProductsRepositoryInMemory } from "@modules/products/repositories/in-memory/ProductsRepositoryInMemory";
import { LocalStorageProvider } from "@shared/container/providers/StorageProvider/implementations/LocalStorageProvider";
import { UpdateProductPhotoUseCase } from "./UpdateProductPhotoUseCase";

let productsRepositoryInMemory: ProductsRepositoryInMemory;
let localStorageProvider: LocalStorageProvider;
let updateProductPhotoUseCase: UpdateProductPhotoUseCase;

const photo_file = `${__dirname}/../../../../__tests__/test-file/nestjs.png`;

describe("Update Photo Product", () => {
  beforeEach(() => {
    productsRepositoryInMemory = new ProductsRepositoryInMemory();
    localStorageProvider = new LocalStorageProvider();
    updateProductPhotoUseCase = new UpdateProductPhotoUseCase(
      productsRepositoryInMemory,
      localStorageProvider
    );
  });

  afterEach(() => {
    localStorageProvider.delete("nestjs.png", "tmp");
  });

  it("should be able to update photo product", async () => {
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
      photo: null,
    });
    const product_id = "1";

    await expect(
      updateProductPhotoUseCase.execute({ product_id, photo_file })
    ).resolves.not.toThrow();
  });
});
