import { useEffect } from "react";
// import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../../store/slices/users";

function UserDash() {

    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])
    

    // const [userInfoDash, setUserInfoDash] = useState({
    //     username: "",
    //     password: "",
    //     lastname:"",
    //     firstname: "",
    //     birthday: "",
    // } );


    console.log("id: ", id);

    // const inputChangeHandler = (e) => setUserInfoDash({
    //     ...userInfoDash,
    //     [e.target.name]: e.target.value,
    // });

    // const listUsers = useSelector((state) => state.user);
    const user = useSelector((state) => state.user.listUsers.find(user => user.id === Number(id)));
    
    console.log("user: ",user);

    // console.log(user.username);
    // console.log("user role :" , user.role_id);

    const submitHandler = async (e) => {
            e.preventDefault();
        
        console.log("submit effectué lol");
        
        try {

            const response = await fetch("http://localhost:8000/api/v1/user/modify/:id", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    // { userInfoDash }
                )
            });

            
            if (response.ok) {
                const resJson = await response.json();

                console.log("resJson: ", resJson);
               
            }
            
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <main id="dashboard">
            <section>
           
                {/* <h1>Bienvenue {user.username} sur votre dashboard</h1>

                <p>Membre depuis {user.create_at} </p> */}
              

                
                <form id="formulaire" onSubmit={submitHandler}>
                    <fieldset>
                        <legend>Vos données de compte</legend>

                        <label htmlFor="username">Votre pseudo&nbsp;:
                            <input id="username" name="username" type="text" value={user?.username} />
                        </label>

                        <label htmlFor="lastname">Votre nom&nbsp;:
                            <input id="lastname" name="lastname" type="text" value={user?.lastname} />
                        </label>

                        <label htmlFor="firstname">Votre prénom&nbsp;:
                            
                            <input id="firstname" name="firstname" type="text" value={user?.firstname} />
                        </label>

                        <label htmlFor="birthday">Votre date de naissance&nbsp;:
                            
                            <input id="birthday" name="birthday" type="text" value={user?.birthday}/>
                        </label>

                        <label htmlFor="password">Votre password&nbsp;:
                            
                            <input id="password" name="password" type="password"  value={user?.password} />
                        </label>

                        <button type="submit">Modifier</button>
                        

                    </fieldset>    

                </form>
            </section>
        </main>
    )
}

export default UserDash;