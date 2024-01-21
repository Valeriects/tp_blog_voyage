import { useRef } from 'react';
// import { useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function ModifCategory() {
    const nameCatRef = useRef();
    const { id } = useParams();
    
    const getCategory = useSelector((state) => state.category.list.find(article => article.id === Number(id)));
    
  

    const submiHandler = async (e) => {
        e.preventDefault();

        const cat_name = nameCatRef.current.value;

        const response = await fetch(`http://localhost:8000/api/v1/category/modify/${getCategory.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cat_name,
            })
        });

        // console.log(response)
        
        if (response.ok) {
            const resJson = await response.json();
            console.log("resJson: ", resJson);
                
            // navigate('/authentification');
        }
    };

    return (
        // <main id="modifArticle">
        <>
            <form onSubmit={submiHandler}>

                <fieldset>
                    <legend>Modifier le nom de la catégorie &laquo; {getCategory.cat_name} &raquo;</legend>


                    <label htmlFor="cat_name">Modifier le nom:

                    <input ref={nameCatRef} name="cat_name" id="cat_name" type="text"/>
                    {/* <input name="cat_name" id="cat_name" type="text" value={getCategory.cat_name}/> */}
                    </label>
                    
                    <button type="submit">Validez</button>
                </fieldset>
            </form>

            <Link to="/admin">Retour à la page précédente</Link>
        </>
    //  </main>
    )

}


export default ModifCategory;