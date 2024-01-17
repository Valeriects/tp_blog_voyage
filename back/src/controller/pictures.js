import Query from "../model/Query.js";


const allPictures = async (req, res) => {

    const query = "SELECT * FROM pictures";

    const picture = await Query.run(query);

    res.json(picture);
}

export { allPictures };