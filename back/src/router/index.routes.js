import { Router } from "express";

import articlesRoutes from "./articles.routes.js";
import connectionRoutes from "./connection.routes.js";
import usersRoutes from "./users.routes.js";
import picturesRoutes from "./pictures.routes.js";
import categoriesRoutes from "./categories.routes.js";

const router = Router();


//endpoint au singulier
router.use("/api/v1/article", articlesRoutes);

router.use("/api/v1/connection", connectionRoutes);


router.use("/api/v1/user", usersRoutes);

router.use("/api/v1/picture", picturesRoutes)


router.use("/api/v1/category", categoriesRoutes);


router.get('*', (req, res) => {
    res.json({ msg: "error 404 not-found" });
 });

export default router;