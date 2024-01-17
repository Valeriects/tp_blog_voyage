import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
    return (
        <header>
            <NavLink className="logoTitle" to={"/"}>

                <img src="public/assets/images/logo-blog.png" alt="logo du blog de voyage culinaire" />
                <span>Le voyage culinaire</span>
            </NavLink>

            <nav id="menu">
                <NavLink to={"/"}>accueil</NavLink>
                <NavLink to={"liste-des-articles"}>article</NavLink>
                <NavLink to={"authentification"}>mon compte</NavLink>
            </nav>

            <FontAwesomeIcon className="menuBurger" icon={faBars} />
            
        </header>
    )
}

export default Header;