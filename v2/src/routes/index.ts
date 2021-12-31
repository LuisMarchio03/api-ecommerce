import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";
import { authRoute } from "./auth.routes";
import { categoriesRoutes } from "./categories.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/auth", authRoute);
routes.use("/products", productsRoutes);
routes.use("/categories", categoriesRoutes);

export { routes };
