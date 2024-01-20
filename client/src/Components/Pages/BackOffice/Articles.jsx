// import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Article() {

    const {list} = useSelector((state) => state.article);

    return (
        <main id="categories">
            <Link to="/admin">Retour</Link>
            <ul>
            {list.map((item) => (

                <li key={item.id}>

                    <p>{item.title}</p>
                    <p>{item.content}</p>
                    <Link to={`modifier/${item.id}`} >Modifier</Link>
                    <Link to={`supprimer/${item.id}`} >Supprimer</Link>
                </li>

            ))}
            </ul>
        </main>
    )
}

export default Article;
