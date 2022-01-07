import { CreateAdminController } from "./../modules/admin/useCases/createAdmin/CreateAdminController";
import { Router } from "express";

const adminRoutes = Router();

adminRoutes.post("/", new CreateAdminController().handle);

export { adminRoutes };
