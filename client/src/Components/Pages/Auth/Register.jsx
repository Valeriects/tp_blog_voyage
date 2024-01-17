import { useEffect, useRef } from "react";

function Register() {
    const nameRef = useRef();
    const pwdRef = useRef();

    useEffect(() => {
        nameRef.current.focus();
    }, []);


    return (

        <main id="register">
            <form action="" method="post">
                <fieldset>
                    <legend>Connectez-vous</legend>

                    <label htmlFor="pseudo">Votre pseudo&nbsp;:</label>
                    <input id="pseudo" ref={nameRef} name="pseudo" type="text" placeholder="Votre pseudo ici" />

                    <label htmlFor="pwd">Votre mot de passe&nbsp;:</label>
                    <input id="pwd" ref={pwdRef} name="pwd" type="text" placeholder="votre mot de passe ici" />

                    <button type="submit">Validez</button>
                </fieldset>

            </form>
        </main>
    )
}

export default Register;