import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReadProductsUseCase } from "./ReadProductsUseCase";

class ReadProductsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(ReadProductsUseCase);

    const products = await useCase.execute();
    return res.status(200).send(products);
  }
}

export { ReadProductsController };
