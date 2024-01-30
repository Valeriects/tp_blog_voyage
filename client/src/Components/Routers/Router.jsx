import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ListArticles from "../Pages/Articles/ListArticles";
import DetailArticle from "../Pages/Articles/DetailArticle";
import Article from "../Pages/BackOffice/ListArticlesBack";
// import ModifArticle from "../Pages/BackOffice/ArticleBack/ModifArticle";
import UserDash from "../Pages/Dashboard/UserDash";
import BackOffice from "../Pages/BackOffice/BackOffice";
import ModifCategory from "../Pages/BackOffice/CategoryBack/ModifCategory";
import AjoutCategory from "../Pages/BackOffice/CategoryBack/AddCategory";
import DeleteCategory from "../Pages/BackOffice/CategoryBack/DeleteCategory";


function Router() {

    return (
        <Routes>
            {/* Routes du site */}

            <Route path="/" element={<Home />} /> 

            <Route path="/authentification" element={<Login />} />

            <Route path="/authentification/creation-de-compte" element={<Register />} />

            <Route path="/liste-des-articles" element={<ListArticles />} />

            <Route path="/liste-des-articles/:id" element={<DetailArticle />} />


            {/* Routes membre */}
            <Route path="/votre-compte/:id" element={<UserDash />} />
            

            {/* Routes admin */}
            <Route path="/admin" element={<BackOffice />} />
            
            <Route path="/admin/ajout-categorie" element={<AjoutCategory />} />
            <Route path="/admin/modifier-categorie/:id" element={<ModifCategory />} />

            <Route path="/admin/supprimer-categorie/:id" element={<DeleteCategory />} />


            <Route path="/admin/modifier-membre/:id" element={<Article />} />
            
            {/* <Route path="/admin/modifier-role/:id" element={<Article />} /> */}
            
            <Route path="/admin/modifier-image/:id" element={<Article/>} />
            
            {/* <Route path="/admin/modifier-article/:id" element={<ModifArticle />} /> */}
            
            {/* <Route path="/admin/modifier-comment/:id" element={<Article/>} /> */}

        </Routes>
    )


}


export default Router;