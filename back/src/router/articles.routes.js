import { Router } from "express";
import { getAllArticles } from "../controller/articles.js";

const router = Router();

//ici c'est la page /api/v1/articles
router.get('/', getAllArticles);


export default router;