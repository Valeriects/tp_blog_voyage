import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../../../utils/formatDate.js";

function DetailArticle() {
    const { id } = useParams(); //récupérer l'id de l'url

    const getArticle = useSelector((state) => state.article.listAll.find(article => article.id === Number(id)));
    // const { list } = useSelector((state) => state.article.find(article => article.id === Number(id)));
    // const getPictures = useSelector((state) => state.picture.list);

    const { userInfo: { isLogged } } = useSelector((state) => state.user);
    console.log("islogged: ",isLogged);

    const [isFormCommentOpen, setIsFormCommentOpen] = useState(false);

    function toggleFormComment() {
        setIsFormCommentOpen(!isFormCommentOpen);
    }

    console.log(id);
    // console.log("getArticle",getArticle);

    return (
        <main className="home">
            
            <section id="detailArticle" className="listArticle ">

                <h1>{getArticle.title}</h1>
        
                <article>


                    <figure>

                        <img src={`http://localhost:8000/img/${getArticle.src}`} alt={getArticle.alt} />

                        {/* <img src={"http://localhost:8000/img/" +item.src} alt={item.alt} /> */}

                        <figcaption>{getArticle.alt}</figcaption>

                    </figure>

                    <div>
                        <span>Catégorie: {getArticle.cat_name}</span>
                        <span>{formatDate(getArticle.date_publication)}</span>
                    </div>       

                    <p>{getArticle.content}</p>
                    <p>écrit par: {getArticle.username}</p>

                
                    {isLogged &&
                        <button className="addComment" onClick={toggleFormComment}>Mettre un commentaire</button>
                    }

                </article>

                <Link to={"/liste-des-articles"}>Retour à la liste des articles</Link>
            </section>
             
        </main>
    )

}

export default DetailArticle;