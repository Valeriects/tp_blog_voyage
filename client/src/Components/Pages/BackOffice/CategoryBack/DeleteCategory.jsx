import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchDeleteCategory } from "../../../../store/slices/categories";

function DeleteCategory() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const getCategory = useSelector((state) => state.category.list.find(article => article.id === Number(id)));

    const handleDelete = () => {
        console.log("tes dans le handleDelete");
        dispatch(fetchDeleteCategory());
        navigate("/admin");
    }
    
    console.log(getCategory.id);
    // async function deleteCategory() {
    //     const response = await fetch(`http://localhost:8000/api/v1/category/delete/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    // }

    return (
        <>
                <article>

                    <h2>Supprimer la catégorie: </h2>

                    <p>{getCategory.cat_name}</p>

                    <button onClick={handleDelete} type="submit">Supprimer</button>
                </article>

        </>
    )

}

export default DeleteCategory;