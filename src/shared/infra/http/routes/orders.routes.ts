import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ReadOrderController } from "@modules/orders/useCases/readOrder/ReadOrderController";
import { ReadOrdersController } from "@modules/orders/useCases/readOrders/ReadOrdersController";

const ordersRoutes = Router();

const readOrdersController = new ReadOrdersController();
const readOrderController = new ReadOrderController();

ordersRoutes.get("/", ensureAuthenticated, readOrdersController.handle);
ordersRoutes.get("/:id", ensureAuthenticated, readOrderController.handle);

export { ordersRoutes };
