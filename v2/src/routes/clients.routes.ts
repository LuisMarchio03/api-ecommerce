import { Router } from "express";

import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { ListAllClientsController } from "./../modules/clients/useCases/listAllClients/ListAllClientsController";

const clientsRoutes = Router();

clientsRoutes.post("/", new CreateClientController().handle);
clientsRoutes.get("/", new ListAllClientsController().handle);

export { clientsRoutes };
