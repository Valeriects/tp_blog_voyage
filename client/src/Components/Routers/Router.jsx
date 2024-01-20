import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ListArticles from "../Pages/Articles/ListArticles";
import Category from "../Pages/BackOffice/Category";
import DetailArticle from "../Pages/Articles/DetailArticle";
import Article from "../Pages/BackOffice/Articles";
import ModifArticle from "../Pages/BackOffice/ArticleBack/ModifArticle";
import UserDash from "../Pages/Dashboard/UserDash";
import BackOffice from "../Pages/BackOffice/BackOffice";
import UserBack from "../Pages/BackOffice/UsersBack";


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
            
            <Route path="/admin/categorie" element={<Category />} />

            <Route path="/admin/liste-membre" element={<UserBack />} />
            
            <Route path="/admin/liste-membre/modify:id" element={<UserBack />} />
            
            <Route path="/admin/liste-membre/delete/:id" element={<UserBack/>} />
            
            <Route path="/admin/article" element={<Article />} />
            
            <Route path="/admin/article/modifier/:id" element={<ModifArticle />} />
            
            <Route path="/admin/article/supprimer/:id" element={<Article/>} />

        </Routes>
    )


}


export default Router;