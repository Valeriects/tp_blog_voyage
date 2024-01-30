import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../store/slices/users";
import logoImg from "../../../public/assets/images/logo-blog.png";
function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const decoUser = () => {
        dispatch(logout())
        navigate('/');
    };
   
    const { userInfo: { id, username, isLogged, role_id } } = useSelector((state) => state.user);
    
    console.log("id: ",id);
    console.log("username: ",username);
    console.log("islogged: ",isLogged);
    console.log("role: ", role_id);
    
    function toggleBurger() {
        setIsBurgerOpen(!isBurgerOpen);
    }

    return (
        <header>
            <NavLink className="logoTitle" to={"/"}>
                <img src={logoImg} alt="logo du blog de voyage culinaire" />
                {/* <img src="public/assets/images/logo-blog.png" alt="logo du blog de voyage culinaire" /> */}
                <span>Le voyage culinaire</span>
            </NavLink>

            {isBurgerOpen && (

                <nav id="menu">
                    <NavLink to={"/"}>accueil</NavLink>
                    <NavLink to={"liste-des-articles"}>articles</NavLink>

                    {isLogged ? ((role_id === 2) ?
                    <NavLink to={`votre-compte/${id}`}>mon compte</NavLink> : <NavLink to={`/admin`}>admin</NavLink>) :
                    <NavLink to={"authentification"}>connexion</NavLink> 
                    }

                    {isLogged && 
                        // <button className="deco">Déconnexion</button>
                        <button className="deco" onClick={decoUser}>Déconnexion</button>
                    }
                </nav>
            )}

            <button onClick={toggleBurger} className="btnBurger" title="accéder au menu de navigation" aria-label="Accéder au menu de navigation">
                <FontAwesomeIcon className="menuBurger" icon={faBars} />
            </button>
            
        </header>
    )
}

export default Header;