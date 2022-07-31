import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReadOrdersUseCase } from "./ReadOrdersUseCase";

class ReadOrdersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(ReadOrdersUseCase);

    const orders = await useCase.execute();
    return res.status(200).send(orders);
  }
}

export { ReadOrdersController };
