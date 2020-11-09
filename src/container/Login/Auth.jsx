import React, {useState} from 'react';
import 'firebase/auth';
import Style from "./index.module.css";
import {useUser, useFirebaseApp} from 'reactfire';


export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const firebase = useFirebaseApp();
    const user = useUser();

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const logout = async () =>{
        await firebase.auth().signOut();
    }

    const login = async ()=>{
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    return(
        <div>
            {
                !user &&
                <div>
            <label className={Style.text}>Correo: </label>
                <input className={Style.input} onChange={ (ev)=>setEmail(ev.target.value) } type="text"/>
                <label className={Style.text}>Contraseña: </label>
                <input className={Style.input}  onChange={ (ev)=>setPassword(ev.target.value) } type="password"/>
                <button className={Style.buttonLogin} onClick={submit} >Crear Cuenta</button>
                <button className={Style.buttonLogin} onClick={login} >Ingresar</button>
            </div>}
            {
               user && <button onClick={logout} className={Style.buttonLogout}>Cerrar Sesión</button> 
            }
        </div>
    )

}