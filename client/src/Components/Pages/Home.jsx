import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import formatDate from "../../utils/formatDate.js";

function Home() {

    const getListArticle = useSelector((state) => state.article.list);

    // console.log(getListArticle.articles);
    return (
        <main className="home">


            <section className="listArticle">
            <h1>Bienvenue sur le blog de voyage culinaire</h1>
                <h2>Derniers articles parus :</h2>

                {getListArticle.map((item) => (
                    <article key={item.id} >

                        <h3>{item.title} <span> écrit par : {item.username}</span> </h3>
                        <div>
                            <span>Catégorie: {item.cat_name}</span>
                            <span>{formatDate(item.date_publication)}</span>
                        </div>

                        <figure>

                            <img src={`http://localhost:8000/img/${item.src}`} alt={item.alt}/>
                            <figcaption>{item.alt}</figcaption>

                        </figure>

                        <p className="ellipsis">{item.content}</p>

                        <Link to={`liste-des-articles/${item.id}`}><FontAwesomeIcon icon={faSquarePlus} /></Link>
                        
                    </article>
                    
                ))}
            </section>
        </main>
    )
}

export default Home;