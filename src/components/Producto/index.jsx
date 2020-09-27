import React from "react";
import Style from "./style.module.css";
import {Link} from "react-router-dom";

export const Producto = (props) => {
    return(
        <div className={Style.grid}>
            <Link to={props.link}><img className="imagen" src={props.src} alt={props.alt}/>
            <p className={Style.imagen}>{props.name}</p>
            </Link>
        </div>
    )
}

export const Comida = (props) => {
    return(
        <div className={Style.grid}>
            <Link to="/food/pay" className="linked">
            <img className={Style.imagen} src={props.src} alt={props.alt}/>
            <p className={Style.imagen}>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
            </Link>
        </div>
    )
}
export const Ropa = (props) => {
    return(
        <div className={Style.grid}>
            <img className={Style.imagen} src={props.src} alt={props.alt}/>
            <p className={Style.imagen}>{props.name}</p>
            <p>{props.description}</p>
            <p>Talla: {props.talla}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
        </div>
    )
}
export const Detalle = (props) => {
    return(
        <div className={Style.grid}>
            <img className={Style.imagen} src={props.src} alt={props.alt}/>
            <p className={Style.imagen}>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
        </div>
    )
}
export const Accesorio = (props) => {
    return(
        <div className={Style.grid}>
            <img className={Style.imagen} src={props.src} alt={props.alt}/>
            <p className={Style.imagen}>{props.name}</p>
            <p>{props.description}</p>
            <p>{props.cantidad}</p>
            <p>{props.price}</p>
        </div>
    )
}