import { Request, Response } from "express";
import { container } from "tsyringe";

import { ReadOrderUseCase } from "./ReadOrderUseCase";

class ReadOrderController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const useCase = container.resolve(ReadOrderUseCase);

    const order = await useCase.execute(id);
    return res.status(200).send(order);
  }
}

export { ReadOrderController };
