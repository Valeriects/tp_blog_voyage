import Query from "../model/Query.js";
import bcrypt from "bcrypt";


//affiche tous les users
const getUsersAll = async (req, res) => {

    try {
        const query = "SELECT * FROM users";

        const listUsers = await Query.run(query);

        res.json(listUsers);
        console.log("node users: ",listUsers);
    } catch (err) {
        console.log(err);
    }
}



const upUser = async (req, res) => {
    
    try {
        const { lastname, firstname, birthday, password } = req.body;

        const query = "UPDATE users SET lastname = ?, firstname = ?, birthday = ?, password = ? WHERE id= ?";


        const hashNewPwd = await bcrypt.hash(password, 10);

        const user = await Query.runByParams(query, [lastname, firstname, birthday, hashNewPwd, req.params.id]);
    
        res.json({msg: "Vos données ont bien été modifiées.", user});
        
    } catch (err) {
        console.log(err);
    }
}

const deleteUser = async (req, res) => {
    try {
        const query = "DELETE FROM users WHERE id = ?";

        const supprUser = await Query.runByParams(query, [req.params.id]);

        res.json({ msg: "Suppression d'un membre de votre blog effectuée", supprUser });
        
    } catch (err) {
        console.log(err);
    }
}

export { getUsersAll, upUser, deleteUser };