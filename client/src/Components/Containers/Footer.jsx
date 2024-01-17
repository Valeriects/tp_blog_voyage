import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareTwitter, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    return (
        <footer>
            <p>Copyright - 2024</p>

            <nav id="navFooter">
                
                {/* <a className="picto fa-solid fa-rss"></a> */}
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon className="iconeFooter" icon={faSquareFacebook} />
                    
                </a>
                <a href="https://twitter.com">

                    <FontAwesomeIcon className="iconeFooter" icon={faSquareTwitter} />
                </a>
                <a href="https://github.com">

                    <FontAwesomeIcon className="iconeFooter" icon={faSquareGithub} />
                </a>


                
            </nav>
        </footer>
    )
}

export default Footer;