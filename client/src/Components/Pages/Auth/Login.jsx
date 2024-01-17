import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {

    const nameRef = useRef();
    const pwdRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, [])


    //on fait la soumission du formulaire
    const submitHandler = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const pwd = pwdRef.current.value;


        const response = await fetch('http;//localhost:8000/api/v1/connection', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                pwd
            })
        });

        const data = await response.json();
        return data;

    }



    return (
        <main id="login">
            {/* il faut le fetch de l'authentification pour pouvoir mettre le chemin de la page action je pense */}
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Connectez-vous</legend>

                    <label htmlFor="username">Votre pseudo&nbsp;:</label>
                    <input id="username" ref={nameRef} name="username" type="text" placeholder="Votre pseudo ici" />

                    <label htmlFor="password">Votre mot de passe&nbsp;:</label>
                    <input id="password" ref={pwdRef} name="password" type="text" placeholder="votre mot de passe ici" />

                    <button type="submit">Validez</button>
                </fieldset>

                <Link className="lienInscription" to="creation-de-compte">S&apos;inscrire</Link>
            </form>
        </main>
    )

}

export default Login;