import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReadCategoriesUseCase } from "./ReadCategoriesUseCase";

class ReadCategoriesController {
  async handle(req: Request, res: Response) {
    const useCase = container.resolve(ReadCategoriesUseCase);

    const categories = await useCase.execute();
    return res.status(200).send(categories);
  }
}

export { ReadCategoriesController };
