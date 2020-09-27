import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

export const Producto = (props) => {
    return(
        <div className="grid">
            <Link to={props.link}><img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
            </Link>
        </div>
    )
}

export const Comida = (props) => {
    return(
        <div className="grid">
            <Link to="/food/pay" className="linked">
            <img className="imagen" src={props.src} alt={props.alt}/>
            <p className="imagen">{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
            </Link>
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