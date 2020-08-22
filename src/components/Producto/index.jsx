import React from "react";
import "./style.css";

export const Producto = (props) => {

    return(
        <div>
            <img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
        </div>
    )
}

export const Informacion = (props) => {

    return(
        <h1>ESTO ES UNA PRUEBA</h1>
    )
}
//export default Producto;