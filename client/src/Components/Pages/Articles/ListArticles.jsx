import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import formatDate from "../../../utils/formatDate.js";



function ListArticles() {
    const [search, setSearch] = useState('');
    
    const { listAll } = useSelector((state) => state.article);
    // const { listPictures } = useSelector((state) => state.picture);

    const searchListAll = listAll.filter(article => article.title.includes(search));     

    console.log(searchListAll)
    return (
        <main className="home">


            
            <section className="listArticle">
                <h1>Liste des articles déjà parus:</h1>

                <div className="divInputSearch">
                    <input className="inputSearch" type='text' placeholder='Votre recherche...' onChange={(e) => setSearch(e.target.value)}></input>

                </div>
                
                
            {searchListAll.map((item) => (
                <article key={item.id}>
                
                    <h2>{item.title}</h2>

                    <figure>

                        <img src={`http://localhost:8000/img/${item.src}`} alt={item.alt}/>
                    {/* <img src={"http://localhost:8000/img/" +item.src} alt={item.alt} /> */}
                        <figcaption>{item.alt}</figcaption>

                    </figure>
              
                    <p className="ellipsis">{item.content}</p>

                    <p>écrit par: {item.username}</p>

                    <div>
                        <span>Catégorie: {item.cat_name}</span>
                        <span>{formatDate(item.date_publication)}</span>

                    </div>

                    {/* <p>{item.date_publication}</p> */}

                    <Link to={`${item.id}`}><FontAwesomeIcon icon={faSquarePlus} /></Link>
                </article> 

            ))}
            </section>
        </main>
    )
}


export default ListArticles;