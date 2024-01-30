// import { useSelector } from '@reduxjs/toolkit';
// import { Link } from 'react-router-dom';
import { useState } from "react";
import TableUsers from './ListeUsersBack';
import TableImages from "./ListPicturesBack";
import TableCategories from "./ListCategoryBack";
// import ModifArticle from "./ArticleBack/ModifArticle.jsx";
function BackOffice() {
    console.log('hello');
    // const {listUsers} = useSelector((state) => state.user);
    const [listUsersOpen, setListUsersOpen] = useState(false);
    const [listImgOpen, setListImgOpen] = useState(false);
    const [listCategoryOpen, setListCategoryOpen] = useState(false);

    function toggleListUsers() {
        setListUsersOpen(!listUsersOpen);
    }
    function toggleListImg() {
        setListImgOpen(!listImgOpen);
    }
    function toggleListCategory() {
        setListCategoryOpen(!listCategoryOpen);
    }

    return (
        <main id="admin">
            <h1>Bienvenue sur Admin</h1>

            <h2>Rubriques:</h2>


            <ul>
                <li>
                    
                <button onClick={toggleListUsers}>Membres</button>
                </li>

                <li>

                <button >Articles</button>
                </li>

                <li>
                <button onClick={toggleListCategory}>Categories</button>

                </li>

                <li>
                <button >Roles des membres</button>

                </li>

                <li>
                <button onClick={toggleListImg}>Images des articles</button>
                </li>

                <li>
                <button >Commentaires des articles</button>
                 </li>
            </ul>


            {/* <button >Articles</button> */}

            {/* <ModifArticle /> */}
            <div id="userBack">

                {listUsersOpen && <TableUsers />}

                {listImgOpen && <TableImages/>}
                
                {listCategoryOpen && <TableCategories/>}
                
            </div>
                
        </main>
   )
}

export default BackOffice;