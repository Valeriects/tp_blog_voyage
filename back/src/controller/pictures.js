import Query from "../model/Query.js";


const allPictures = async (req, res) => {

    try {
        const query = "SELECT * FROM pictures";

        const picture = await Query.run(query);

        res.json(picture);
    } catch (err) {
        console.log(err);
    }
}

const addPicture = async (req, res) => {

    try {
        console.log(req.body);

        const { src, alt, article_id } = req.body;

        console.log(src, alt, article_id);

        const query = "INSERT INTO pictures (src, alt, article_id) VALUES (?, ?, ?)";

        const createPicture = await Query.runByParams(query, [src, alt, article_id]);
        console.log(createPicture);

        res.json({msg: "Votre image est créée", createPicture});

    } catch (err) {
        console.log(err);
    }
}

const upPicture = async (req, res) => {
    try {
        const { src, alt, article_id } = req.body;
        const query = "UPDATE pictures SET  src= ?, alt= ?, article_id= ? WHERE id = ?";

        const patchPicture = await Query.runByParams(query, [src, alt, article_id, req.params.id]);

        res.json({ msg: "Votre image est bien modifiée" });
        
    } catch (err) {
        console.log(err);
    }
}

const deletePicture = async (req, res) => {
    const query = "DELETE FROM pictures WHERE id= ?";

    const deletePicture = await Query.runByParams(query, [req.params.id]);

    res.json({ msg: "Votre image à bien été supprimée." });
}

export { allPictures, addPicture, upPicture, deletePicture };