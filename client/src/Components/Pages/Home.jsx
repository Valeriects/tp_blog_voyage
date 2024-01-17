import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function Home() {

    const getListArticle = useSelector((state) => state.article.list);

    // console.log(getListArticle.articles);
    return (
        <main id="home">
            <section id="title">
                <h1>Bienvenue sur le blog de voyage culinaire</h1>
            </section>

            <section id="listArticle">
                <h2>Derniers articles parus :</h2>

                {getListArticle.map((item) => (
                    <article key={item.id} >

                        <h3>{item.title} de  {item.username}
                            <span>Catégorie: {item.cat_name}</span>
                            <span>{Date(item.date_publication)}</span>
                        </h3>

                        <figure>

                            <img src={`http://localhost:8000/img/${item.src}`} alt={item.alt}/>
                            <figcaption>le content ici ?</figcaption>

                        </figure>

                        <p>{item.content}</p>

                        <a href="">voir plus...</a>

                        <FontAwesomeIcon icon={faSquarePlus} />
                    </article>
                    
                ))}
            </section>
        </main>
    )
}

export default Home;