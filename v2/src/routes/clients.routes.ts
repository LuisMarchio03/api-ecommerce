import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";

const clientsRoutes = Router();

clientsRoutes.post("/", new CreateClientController().handle);

export { clientsRoutes };
