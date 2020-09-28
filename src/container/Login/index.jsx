import React from "react";
import Style from "./index.module.css";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
            <div className={Style.container}>
            <h1 className={Style.myh1}>Login</h1>
            <form className={Style.form}>
                <label className={Style.text}>Correo: </label>
                <input className={Style.input} type="text"/>
                <label className={Style.text}>Contraseña: </label>
                <input className={Style.input} type="password"/>
                <Link to="/">
                <button className={Style.buttonLogin} type="submit">Ingresar</button>
                </Link>
            </form>
            </div>
        </>


    );
}
export default Login;