import React from 'react';
import 'firebase/auth';
import Auth from './Auth';
import {useUser} from 'reactfire';
import Style from "./index.module.css";

function Login(){
    const user = useUser();
    return(
        <div className={Style.logeado}>
            <p className={Style.P}>Bienvenido</p>
            {user &&<p className={Style.username}>Usuario:{user.email}</p>}
            <Auth />
        </div>
    )


}

export default Login;