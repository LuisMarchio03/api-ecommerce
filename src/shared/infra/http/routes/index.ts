import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { passwordRoutes } from "./password.routes";
import { usersRoutes } from "./users.routes";
import { categoriesRoutes } from "./categories.routes";
import { productsRoutes } from "./products.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/password", passwordRoutes);
router.use("/categories", categoriesRoutes);
router.use("/products", productsRoutes);
router.use(authenticateRoutes);

export { router };
