import Query from "../model/Query.js";
// import {articleWithPictures} from "../utils/articleWithPictures.js";


const getAllArticles = async (req, res) => {
    try {

        // const query = "SELECT articles.* FROM articles ";
        const query = "SELECT articles.*, categorie.cat_name, pictures.src, pictures.alt, users.username FROM articles JOIN articles_categories ON article_id = articles.id JOIN categorie ON categorie.id = category_id JOIN pictures ON pictures.article_id = articles.id JOIN users ON users.id = articles.user_id ORDER BY date_publication DESC";
        
        const articles = await Query.run(query);

        res.json(articles);
    } catch(err) {
        console.log(err);
    }
}

const getFullArticles = async (req, res) => {
    try {

        const query = "SELECT articles.*, categorie.cat_name, pictures.src, pictures.alt, users.username FROM articles JOIN articles_categories ON article_id = articles.id JOIN categorie ON categorie.id = category_id JOIN pictures ON pictures.article_id = articles.id JOIN users ON users.id = articles.user_id ORDER BY date_publication DESC LIMIT 3";

    // const query = "SELECT articles.*, categorie.cat_name FROM articles JOIN articles_categories ON article_id = articles.id JOIN categorie ON categorie.id = category_id";
    
        // const query = "SELECT articles.* FROM articles ";

    // todo à faire, revoir la logique etc
        // const queryPictures = "SELECT pictures.src, pictures.alt FROM articles JOIN pictures ON pictures.article_id = articles.id"

        const articles = await Query.run(query);

        // const pictures = await Query.run(queryPictures);

        console.log("article complet: ", articles);
        // const articleComplet = [...articles, ...pictures];
        // console.log("complet", articleComplet);
        // console.log(articleWithPictures(articles, pictures));
        // res.json(articleComplet);

        res.json(articles);
    } catch (err) {
        console.log(err);
    }
}

const addArticle = async (req, res) => {
    try {
        console.log(req.body);
        const query = "INSERT INTO articles (title, content, date_publication, user_id) VALUES (?, ?, NOW(), 1) ";

        const createArticle = await Query.runByParams(query, [req.body.title, req.body.content]);
        

        res.json(createArticle);

    } catch (err) {
        console.log(err);
    }
}

const deleteArticle = async (req, res) => { 
    try {

        console.log(req.params.id);
        
        const query = "DELETE * FROM articles WHERE id = ? ";

        const deleteArticle = await Query.runByParams(query, [req.params.id]);

        res.json({ msg: "Article supprimé" });

    } catch (err) {
        console.log(err);
    }
}


const patchArticle = async (req, res) => { 
    try {
        console.log(req.body);
        const query = "UPDATE articles SET title = ?, content = ? WHERE id = ? ";

        const patchArticle = await Query.runByParams(query, [req.body.title, req.body.content, req.params.id]);

        // console.log(req.params.id)
        // console.log(patchArticle);
        
        res.json({ msg: "Modification effectuées"});

    } catch (err) {
        console.log("erreur: ", err);
    }
 }

export { getAllArticles, addArticle, deleteArticle, patchArticle, getFullArticles };
