import Query from "../model/Query.js";

const getAllArticles = async (req, res) => {

    // const query = "SELECT articles.*, categorie.cat_name, pictures.* FROM articles JOIN articles_categories ON article_id = articles.id JOIN categorie ON categorie.id = category_id JOIN pictures ON pictures.article_id = articles.id ";

    const query = "SELECT articles.*, categorie.cat_name FROM articles JOIN articles_categories ON article_id = articles.id JOIN categorie ON categorie.id = category_id";

// todo à faire, revoir la logique etc
    // const queryPictures = "SELECT pictures.* FROM articles JOIN pictures ON pictures.article_id = articles.id WHERE articles.id = ?"

    const articles = await Query.run(query);

    // const pictures = await Query.run(queryPictures);

    console.log("article complet: ", articles);
    // const articleComplet = [...articles, ...pictures];
    // console.log("complet", articleComplet);

    // res.json(articleComplet);

    res.json(articles);
}

export { getAllArticles };
