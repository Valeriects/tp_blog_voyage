import Query from "../model/Query.js";

//affiche tous les users
const getUsersAll = async (req, res) => {

    const query = "SELECT * FROM users";

    const listUsers = await Query.run(query);

    res.json(listUsers);
}


// affiche un seul user selon son id
const getOneUserById = async (req, res) => {
    const query = "SELECT * FROM users WHERE id= ?";

    const user = await Query.runByParams(query, [req.params.id]);

    res.json(user);
}



export { getUsersAll, getOneUserById };