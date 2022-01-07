import { Router } from "express";

import { productsRoutes } from "./products.routes";
import { sellerRoutes } from "./seller.routes";
import { sellersAuthRoute } from "./sellersAuth.routes";
import { categoriesRoutes } from "./categories.routes";
import { clientsRoutes } from "./clients.routes";
import { clientsAuthRoute } from "./clientsAuth.routes";
import { adminRoutes } from "./admin.routes";

const routes = Router();

routes.use("/sellers", sellerRoutes);
routes.use("/sellers/auth", sellersAuthRoute);
routes.use("/products", productsRoutes);
routes.use("/categories", categoriesRoutes);
routes.use("/clients", clientsRoutes);
routes.use("/clients/auth", clientsAuthRoute);
routes.use("/users/admins", adminRoutes);

export { routes };
