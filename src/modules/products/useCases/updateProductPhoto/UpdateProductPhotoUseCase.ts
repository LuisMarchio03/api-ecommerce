import { IProductsRepository } from "@modules/products/repositories/IProductsRepository";
import { inject, injectable } from "tsyringe";

import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { IUpdateProductPhotoDTO } from "@modules/products/dtos/IUpdateProductPhotoDTO";

@injectable()
class UpdateProductPhotoUseCase {
  constructor(
    @inject("ProductsRepository")
    private productsRepository: IProductsRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({
    product_id,
    photo_file,
  }: IUpdateProductPhotoDTO): Promise<void> {
    const product = await this.productsRepository.findById(product_id);

    if (product.photo) {
      await this.storageProvider.delete(product.photo, "photo");
    }
    await this.storageProvider.save(photo_file, "photo");

    product.photo = photo_file;

    await this.productsRepository.create(product);
  }
}

export { UpdateProductPhotoUseCase };
