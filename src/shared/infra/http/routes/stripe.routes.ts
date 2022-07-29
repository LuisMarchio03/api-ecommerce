import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateCheckoutSessionController } from "@modules/payment/useCases/createChekoutSession/CreateCheckoutSessionController";

const stripeRoutes = Router();

const createCheckoutSessionController = new CreateCheckoutSessionController();

stripeRoutes.post(
  "/create-checkout-session",
  ensureAuthenticated,
  createCheckoutSessionController.handle
);

export { stripeRoutes };
