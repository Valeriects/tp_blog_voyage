// import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Category() {

    const {list} = useSelector((state) => state.category);

    return (
        <main id="categories">
            <ul>
            {list.map(category => (

                <li key={category.id}>
                    <p>{category.cat_name}</p>
                </li>
            ))}
            </ul>
        </main>
    )
}

export default Category;
