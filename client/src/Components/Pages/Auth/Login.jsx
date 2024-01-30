import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateStatus } from "../../../store/slices/users";

function Login() {

    const dispatch = useDispatch();
    const nameRef = useRef(); //pour selectionner l'input unsername au 1er montage du composant
    const navigate = useNavigate(); //pour la redirection
    
    // const [msg, setMsg] = useState('');
    
    //avec un state pour récupérer les données formulaires
    const [userInfo, setUserInfo] = useState({
        //là on met les deux données que l'on demande au user pour s'inscrire
        username: "",
        password:""
    })

    useEffect(() => {
        nameRef.current.focus();

    }, [])


    const inputChangeHandler = (e) => setUserInfo({
        ...userInfo, //je spread un nouveau tableau, avec les infos de userInfo
        //je l'associe avec la valeur de chaque input
        [e.target.name]: e.target.value,
    })
    
  
    //on fait la soumission du formulaire
    const submitHandler = async (e) => {

        try {
            e.preventDefault();


            const response = await fetch('http://localhost:8000/api/v1/connection', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userInfo})
            });

            console.log("response: ", response);


            if (response.ok) {
                const resJson = await response.json();

                console.log("resJson: ", resJson);

                dispatch(updateStatus(resJson));
                // dispatch(updateStatus(resJson.user));
                
                navigate('/');
            }
            

        } catch (err) {
            console.log(err);
        }
    };



    return (
        <main className="formulaire">
            <form onSubmit={submitHandler} >
                <fieldset>
                    <legend>Connectez-vous</legend>

                    <label htmlFor="username">Votre pseudo&nbsp;:
                    {/* <input id="username" ref={nameRef} name="username" type="text" placeholder="Votre pseudo ici"/> */}
                        <input ref={nameRef} id="username" name="username" type="text" placeholder="Votre pseudo ici" onChange={inputChangeHandler} />
                    </label>

                    <label htmlFor="password">Votre mot de passe&nbsp;:
                    {/* <input id="password" ref={pwdRef} name="password" type="password" placeholder="votre mot de passe ici"/> */}
                        <input id="password" name="password" type="password" placeholder="votre mot de passe ici" onChange={inputChangeHandler} />
                    </label>

                    <button type="submit">Validez</button>
                </fieldset>

                <Link className="lienInscription" to="creation-de-compte">S&apos;inscrire</Link>
            </form>
        </main>
    )

}

export default Login;