import { container } from "tsyringe";
import { Request, Response } from "express";

import { CreateCheckoutSessionUseCase } from "./CreateCheckoutSessionUseCase";
import { ICreateCheckoutDTO } from "../../dtos/ICreateCheckoutDTO";

class CreateCheckoutSessionController {
  async handle(req: Request, res: Response): Promise<void> {
    try {
      const { product_id, user_id, quantities }: ICreateCheckoutDTO = req?.body;
      const useCase = container.resolve(CreateCheckoutSessionUseCase);

      const result = await useCase.execute({ product_id, user_id, quantities });
      res.redirect(303, result);
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export { CreateCheckoutSessionController };
