import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSquarePen } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function TableImages() {
    const {listPictures} = useSelector((state) => state.picture);

    console.log(listPictures);
    return (
            <table>
                <caption>Liste des images</caption>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Actions</th>
                        <th>Src</th>
                        <th>Alt</th>
                        <th>id de l&apos;article</th>
                    </tr>
                </thead>

                <tbody>
                    {listPictures.map((item) => (

                        <tr key={item?.id}>
                            
                            <td>{item?.id}</td>
                            <td className="tdIcone">
                                <Link to={`/modifier-image/${item?.id}`}><FontAwesomeIcon icon={faSquarePen} className="iconeTable" /></Link>
                                <button type="submit" ><FontAwesomeIcon icon={faTrashCan} className="iconeTable" /></button>
                                {/* <Link to={`/delete/${item.id}`}><FontAwesomeIcon icon={faTrashCan} className="iconeTable" /></Link> */}
                            </td>
                            <td>{item?.src}</td>
                            <td>{item?.alt}</td>
                            <td>{item?.article_id}</td>

                        </tr>   
                    ))}
                </tbody>
            </table>
    )
}

export default TableImages;