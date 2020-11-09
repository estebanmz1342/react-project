import React from 'react';
import 'firebase/auth';
import Auth from './Auth';
import {useUser} from 'reactfire';

function Login(){
    const user = useUser();
    return(
        <div>
            {user &&<p>Usuario:{user.email}</p>}
            <Auth />
        </div>
    )


}

export default Login;