import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateProductPhotoUseCase } from "./UpdateProductPhotoUseCase";

class UpdateProductPhotoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const photo_file = request.file.filename;

    const updateProductPhotoUseCase = container.resolve(
      UpdateProductPhotoUseCase
    );

    await updateProductPhotoUseCase.execute({ product_id: id, photo_file });

    return response.status(204).send();
  }
}

export { UpdateProductPhotoController };
