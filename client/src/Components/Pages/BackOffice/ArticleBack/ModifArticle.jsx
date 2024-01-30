import { useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ModifArticle() {
    const titleRef = useRef();
    const contentRef = useRef();
    const { id } = useParams();
    
    const getArticle = useSelector((state) => state.article.list.find(article => article.id === Number(id)));
    

    const submiHandler = async (e) => {
        e.preventDefault();

        const title = titleRef.current.value;
        const content = contentRef.current.valueDefault;

        const response = await fetch('http://localhost:8000/api/v1/article', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    content
                })
        });
    }

    return (
        // <main id="modifArticle">
        <>
            <form onSubmit={submiHandler}>

                <fieldset>
                    <legend>Modifier votre article &laquo;{getArticle.title}&raquo;</legend>

                    <label htmlFor="title">Modifier le titre:</label>

                    <input id="title" name="title" type="text" value={getArticle.title}/>

                    

                    <label htmlFor="content">Modifier le contenu:</label>

                    <textarea name="content" id="content" cols="30" rows="10" defaultValue={getArticle.content}></textarea>
                    
                    {/* <input type="input" value="Validez" /> */}
                    <button type="submit">Validez</button>
                </fieldset>
            </form>

            <Link to="/admin/article">Retour à la liste des articles</Link>
        </>
    //  </main>
    )

}


export default ModifArticle;