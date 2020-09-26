import React from "react";
import "./style.css";

export const Producto = (props) => {

    return(
        <div className="grid">
            <img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
        </div>
    )
}

export const Comida = (props) => {
    return(
        <div className="grid">
            <img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
        </div>
    )
}
export const Ropa = (props) => {
    return(
        <div className="grid">
            <img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
            <p>{props.description}</p>
            <p>Talla: {props.talla}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
        </div>
    )
}
export const Detalle = (props) => {
    return(
        <div className="grid">
            <img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
        </div>
    )
}
export const Accesorio = (props) => {
    return(
        <div className="grid">
            <img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
        </div>
    )
}