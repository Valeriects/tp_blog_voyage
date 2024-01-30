import { Router } from "express";
import { allCategories, addCategory, upCategory, deleteCategory } from "../controller/categories.js";

const router = Router();

router.get("/", allCategories);

router.post("/add", addCategory);

router.patch("/modify/:id", upCategory);

router.delete("/delete/:id", deleteCategory);

export default router;