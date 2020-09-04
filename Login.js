import React from 'react';
import "./Login.css"
import image from './fblogo.webp';
import {Button} from "@material-ui/core"
import {auth,provider} from './firebase';
import { actionTypes } from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
    const [state,dispatch]=useStateValue();
    const signIn = () =>{
        //signIn
        auth.signInWithPopup(provider)
        .then(result =>{

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            });
        })
        .catch((error) =>alert(error.message));
    };
    return (
        <div className="login">
            <div classname="login_logo">
                <img src={image}/>
                <h1>facebook</h1>

            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
            
        </div>
    )
}

export default Login
