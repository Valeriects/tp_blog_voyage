import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareTwitter, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer>

            <nav id="navFooter">
                
                {/* <a className="picto fa-solid fa-rss"></a> */}
                <Link to="https://www.facebook.com">
                    <FontAwesomeIcon className="iconeFooter" icon={faSquareFacebook} />
                    
                </Link>
                <Link to="https://twitter.com">

                    <FontAwesomeIcon className="iconeFooter" icon={faSquareTwitter} />
                </Link>
                <Link to="https://github.com">

                    <FontAwesomeIcon className="iconeFooter" icon={faSquareGithub} />
                </Link>
                
            </nav>
            
            <p>Copyright - 2024</p>
        </footer>
    )
}

export default Footer;