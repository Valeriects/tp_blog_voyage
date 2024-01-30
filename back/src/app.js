import express from 'express';
import "dotenv/config"; //pour avoir accès aux variables d'environnement de .env
import cors from "cors";
import path from "path";


import router from "./router/index.routes.js";



const app = express();

const PORT = process.env.LOCAL_PORT || 8000;
//ou 
// const { LOCAL_PORT } = process.env;

app.use('/img', express.static(path.join(process.cwd(), "/public/assets/images/")));


app.use(cors({
    origin: "http://localhost:5173",
}));


// on envoi des données au format json vers le back, pour les "traduire" dans le'objet body, il faut mettre dans le back :
app.use(express.json()); 
 

app.use(router);



// console.log(process.env);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})