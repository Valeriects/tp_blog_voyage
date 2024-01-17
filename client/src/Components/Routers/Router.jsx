import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ListArticles from "../Pages/Articles/ListArticles";


function Router() {

    return (
        <Routes>

            <Route path="/" element={<Home />} /> 

            <Route path="/authentification" element={<Login />} />

            <Route path="/authentification/creation-de-compte" element={<Register />} />

            <Route path="/liste-des-articles" element={<ListArticles />} />

        </Routes>
    )
}


export default Router;