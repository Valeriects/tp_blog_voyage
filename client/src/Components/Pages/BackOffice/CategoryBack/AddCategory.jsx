
import { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

function AjoutCategory() {
    const nameCatRef = useRef();   
  

    useEffect(() => {
        nameCatRef.current.focus();
    }, []);
    
    const submiHandler = async (e) => {
        e.preventDefault();

        const cat_name = nameCatRef.current.value;

        const response = await fetch("http://localhost:8000/api/v1/category/add", {
            method: "POST",
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
                    <legend>Créez une nouvelle catégorie</legend>


                    <label htmlFor="cat_name">Ajoutez une catégorie:

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



export default AjoutCategory;