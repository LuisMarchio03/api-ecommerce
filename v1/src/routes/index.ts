import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";
import { authRoute } from "./auth.routes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/users", usersRoutes);
routes.use("/auth", authRoute);

export { routes };
