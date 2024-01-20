import Query from "../model/Query.js";


const allCategories = async (req, res) => {
    try {
        const query = "SELECT * FROM categorie";
        const categories = await Query.run(query);

        res.json(categories);
    } catch (err) {
        console.log(err);
    }

}

const addCategory = async (req, res) => {
    try {
        const query = "INSERT INTO categorie (cat_name) VALUES (?)";
        const category= await Query.runByParams(query, [req.body.cat_name]);

        res.json({ msg: "Ajout d'une catégorie réussi", category });

    } catch (err) {
        console.log(err);
    }
}

const upCategory = async (req, res) => {
    try {
        console.log(req.body.cat_name);
        const query = "UPDATE categorie SET cat_name = ? WHERE id = ?";

        const patchCategory = await Query.runByParams(query, [req.body.cat_name, req.params.id]);

        res.json({ msg: "Modification d'une catégorie effectuée", patchCategory});

    } catch (err) {
        console.log(err);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const query = "DELETE FROM categorie WHERE id = ?";

        const supprCategory = await Query.runByParams(query, [req.params.id]);

        res.json({ msg: "Suppression d'une catégorie effectuée", supprCategory});
    } catch (err) {
        console.log(err);
    }
}

export { allCategories, addCategory, upCategory, deleteCategory };