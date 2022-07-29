import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReadProductUseCase } from "./ReadProductUseCase";

class ReadProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const useCase = container.resolve(ReadProductUseCase);

    const product = await useCase.execute(id);
    return res.status(200).send(product);
  }
}

export { ReadProductController };
