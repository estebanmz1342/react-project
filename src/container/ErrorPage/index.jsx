import React from "react";
import Style from "./index.module.css";

const ErrorPage = () => {
    return(
        <>
            <div className={Style.container_error}>
                <h2 className={Style.title_error}>Oh oh, creo que ese contenido no esta disponible :3</h2>
            </div>
        </>
    )
}

export default ErrorPage;