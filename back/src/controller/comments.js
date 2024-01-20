import Query from "../model/Query.js";

const allComments = async (req, res) => {
    try {
        const query = "SELECT * FROM comments WHERE id= ?";
        const comments = await Query.runByParams(query, req.bparams.id);

        res.json(comments);
    } catch (err) {
        console.log(err);
    }

}

const addComment = async (req, res) => {
    try {
        const { com_title, com_content, user_id } = req.body;
        const query = "INSERT INTO comments (com_title, com_content, com_date_publication, user_id, article_id) VALUES (?, ?, NOW(), ?, ?)";
        const comment = await Query.runByParams(query, [com_title, com_content, user_id, req.params.id]);

        res.json(comment);
    } catch (err) {
        console.log(err);
    }

}


export { allComments };