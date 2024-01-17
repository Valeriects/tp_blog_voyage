import Query from "../model/Query.js";

const getAllArticles = async (req, res) => {

    const query = "SELECT articles.*, categorie.cat_name FROM articles JOIN articles_categories ON article_id = articles.id JOIN categorie ON categorie.id = category_id";


    // const queryPictures = "SELECT pictures.* FROM articles JOIN pictures ON pictures.article_id = articles.id"

    const articles = await Query.run(query);

    // const pictures = await Query.run(queryPictures);

    console.log(articles);

    // res.json(articleComplet(articles, pictures));

    res.json(articles);
}

export { getAllArticles };
