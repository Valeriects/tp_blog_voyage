import Query from "../model/Query.js";
import bcrypt from "bcrypt";

const userRegister = async (req, res) => {

    const { username, password } = req.body;
    //verifier si le pseudo est déjà existant:
    const queryUsername = "SELECT username FROM users WHERE username = ?";
    const IsValidUsername = await Query.runByParams(queryUsername, [username]);

    if (IsValidUsername.length) {
        //status400 = Bad Request
        // res.redirect('/inscription');
        // res.status(400).json({ msg: "Le pseudo est déjà prit. Choissisez s'en un autre." }).redirect('/inscription');
        res.status(400).json({ msg: "Le pseudo est déjà prit. Choissisez s'en un autre." });
    } else {

        // const query = "SELECT * FROM users";
        const query = "INSERT INTO users (username, password, create_at, role_id) VALUES (?, ?, NOW(), 2)";
    
        const hash = await bcrypt.hash(password, 10);
    
        const user = await Query.runByParams(query, [username, hash]);
    
        console.log(req.body);
    
        // res.json(req.body);
        //requete created
        res.status(201).json({ msg: "Inscription au compte réussi" });
    }


}


const userLogin = async (req, res) => {

    const { username, password } = req.body;

    const query = "SELECT username, password, role_id FROM users WHERE username = ?";

    const user = await Query.runByParams(query, [username]);

    console.log("user :", user);
    // console.log(user[0].password);
    //je compare le mot de passe:
    const compareHash = await bcrypt.compare(password, user[0].password);
    
    console.log("hash:",compareHash);
    // console.log("longueur user:", Object.keys(user).length);
    console.log("username BDD : " + user[0].username + ' ' + "username du body : " + username);
    
    if (user.length > 0 && (compareHash === true || user[0].username === username)) {
        // if (user.length > 0 && compareHash === true && user.username === username) {
        res.json({ msg: "connexion ok, plus qu'à faire le session user mais on va faire du jsonwebtoken" });
    } else {

        //todo ne marche pas,     const compareHash = await bcrypt.compare(password, user[0].password) TypeError: Cannot read properties of undefined (reading 'password')

        return res.json({ msg: "Echec de la connexion" });

    }

}


const userDeco = (req, res) => {
    //todo à faire avec le  jsonwebtoken
    res.json({ msg: "Vous êtes déconnecté." });
}

export { userRegister, userLogin, userDeco };