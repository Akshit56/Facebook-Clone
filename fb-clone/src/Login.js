import React from 'react'
import "./Login.css";
import Button from '@mui/material/Button';
import { auth,provider  } from "./Firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";


function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        //Sign In...
        auth.signInWithPopup(provider)
        .then((result) =>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result);
        } )
        .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className='login__logo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Logo_2023.png/900px-Facebook_Logo_2023.png"
            alt = '' />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png"
            alt ='' />
        </div>
        <Button type = 'submit' onClick = {signIn} >
            
            Sign In

        </Button>
    </div>
  )
}

export default Login;