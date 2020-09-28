import React from "react";
import Style from "./index.module.css";

const Login = () => {
    return(
        <>
            <h1 className={Style.myh1}>Login</h1>
            <form className={Style.form}>
                <label>Correo</label>
                <input type="text"/>
                <label >Contraseña</label>
                <input type="password"/>
                <button type="submit">pagar ahora</button>
            </form>
        </>


    );
}
export default Login;