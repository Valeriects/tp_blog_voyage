import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    //avec useRef()
    const nameRef = useRef();
    const pwdRef = useRef();

    const navigate = useNavigate(); //pour la redirection

    useEffect(() => {
        nameRef.current.focus();
    }, []);


        //on fait la soumission du formulaire
    const submitHandler = async (e) => {
        e.preventDefault();
        const username = nameRef.current.value;
        const password = pwdRef.current.value;


        const response = await fetch('http://localhost:8000/api/v1/connection/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        // console.log(response);
        
        if (response.ok) {
            const resJson = await response.json();
            console.log("resJson: ", resJson);
                
            navigate('/authentification');
        }

    };



    return (

        <main className="formulaire">
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Créez votre compte</legend>

                    <label htmlFor="username">Votre pseudo&nbsp;:
                        <input id="username" ref={nameRef} name="username" type="text" placeholder="Votre pseudo ici" />
                    </label>


                    <label htmlFor="password">Votre mot de passe&nbsp;:
                        <input id="password" ref={pwdRef} name="password" type="password" placeholder="votre mot de passe ici" />
                    </label>

                    <button type="submit">Validez</button>
                </fieldset>

                <Link className="lienInscription" to="/authentification">Se connecter</Link>


            </form>
        </main>
    )
}

export default Register;