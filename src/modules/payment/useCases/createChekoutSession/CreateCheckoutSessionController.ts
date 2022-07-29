import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateCheckoutSessionUseCase } from "./CreateCheckoutSessionUseCase";

class CreateCheckoutSessionController {
  async handle(req: Request, res: Response) {
    try {
      const { product_id, user_id, quantities } = req?.body;
      const useCase = container.resolve(CreateCheckoutSessionUseCase);

      const result = await useCase.execute({ product_id, user_id, quantities });
      console.log("results", result);
      res.redirect(303, result);
      // res.status(200).send({
      //   message: "success",
      // });
    } catch (err) {
      res.status(400).send(err);
    }
  }
}

export { CreateCheckoutSessionController };
