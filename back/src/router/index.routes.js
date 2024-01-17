import { Router } from "express";

import articlesRoutes from "./articles.routes.js";
import connectionRoutes from "./connection.routes.js";
import usersRoutes from "./users.routes.js";

const router = Router();



router.use("/api/v1/articles", articlesRoutes);

router.use("/api/v1/connection", connectionRoutes);


router.use("/api/v1/users", usersRoutes);


router.get('*', (req, res) => {
    res.json({ msg: "error 404 not-found" });
 });

export default router;