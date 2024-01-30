import { Router } from "express";
import { allPictures, addPicture, upPicture, deletePicture } from "../controller/pictures.js";

const router = Router();

router.get("/", allPictures);

router.post("/add", addPicture);

router.patch("/modify/:id", upPicture);

router.delete("/delete/:id", deletePicture);

export default router;