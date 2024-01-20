// import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSquarePen } from "@fortawesome/free-solid-svg-icons";

function UserBack() {

    const {listUsers} = useSelector((state) => state.user);

    console.log(listUsers);
    return (
        <main id="userBack">
            <Link to="/admin">Retour</Link>

            <table>
                <caption>Liste des membres de votre site web</caption>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Actions</th>
                        <th>lastname</th>
                        <th>firstname</th>
                        <th>birthday</th>
                        <th>username</th>
                        <th >password</th>
                        <th>create_at</th>
                        <th>role_id</th>
                    </tr>
                </thead>

                <tbody>
                    {listUsers.map((item) => (

                        item.id !== 1 &&
                        <tr key={item.id}>
                            
                            <td>{item.id}</td>
                            <td className="tdIcone">
                                <Link to={`/modify/${item.id}`}><FontAwesomeIcon icon={faSquarePen} className="iconeTable" /></Link>
                                <button type="submit" ><FontAwesomeIcon icon={faTrashCan} className="iconeTable" /></button>
                                {/* <Link to={`/delete/${item.id}`}><FontAwesomeIcon icon={faTrashCan} className="iconeTable" /></Link> */}
                            </td>
                            <td>{item.lastname}</td>
                            <td>{item.firstname}</td>
                            <td>{item.birthday}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.create_at}</td>
                            <td>{item.role_id}</td>

                        </tr>   
                    ))}
                </tbody>

                {/* <tfoot><tr><td></td></tr></tfoot> */}
            </table>

            <Link to="/admin">Retour</Link>
        </main>
    )
}

export default UserBack;
