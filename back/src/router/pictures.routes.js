import { Router } from "express";
import { allPictures } from "../controller/pictures.js";

const router = Router();

router.get("/", allPictures);

export default router;