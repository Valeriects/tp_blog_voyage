import { Router } from "express";
import { getAllArticles, addArticle, deleteArticle, patchArticle, getFullArticles } from "../controller/articles.js";


const router = Router();

//ici c'est la page /api/v1/articles
router.get('/', getFullArticles);

router.get('/all', getAllArticles);

router.post('/add', addArticle);

router.patch('/modify/:id', patchArticle);

router.delete('/delete/:id', deleteArticle);


export default router;