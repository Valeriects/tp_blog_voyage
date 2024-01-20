// import { useSelector } from '@reduxjs/toolkit';
// import { Link } from 'react-router-dom';
import { useState } from "react";
import TableUsers from './ListeUsers';
// import ModifArticle from "./ArticleBack/ModifArticle.jsx";
function BackOffice() {
    console.log('hello');
    // const {listUsers} = useSelector((state) => state.user);
    const [listUsersOpen, setListUsersOpen] = useState(false);

    function toggleListUsers() {
        console.log("ouvet");
        setListUsersOpen(!listUsersOpen);
    }

    return (
        <main id="admin">
            <h1>Bienvenue sur Admin</h1>

            <h2>Rubriques:</h2>


            <ul>
                <li>
                    
                <button to="liste-membre" onClick={toggleListUsers}>Membres</button>
                </li>

                <li>

                <button to="liste-article">Articles</button>
                </li>

                <li>
                <button to="liste-category">Categories</button>

                </li>

                <li>
                <button to="liste-role">Roles des membres</button>

                </li>

                <li>
                <button to="liste-image">Images des articles</button>
                </li>

                <li>
                <button to="liste-commentaire">Commentaires des articles</button>
                 </li>
            </ul>


            {/* <button >Articles</button> */}

            {/* <ModifArticle /> */}
            {listUsersOpen &&
            <div id="userBack">
                <TableUsers/>
            </div>}
                
        </main>
   )
}

export default BackOffice;