import React from 'react';
import Header from "../Header/Header";
import {Comida} from "../Producto";
import "./pagina3.css"

const Pagina3 = () => {
    return (
        <>
            <Header name="InstaShop"/>
            <div className="contenedor">
                <Comida
                    src="https://instagram.fbog2-3.fna.fbcdn.net/v/t51.2885-15/e35/118088804_956241164849118_1203866465920334624_n.jpg?_nc_ht=instagram.fbog2-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ysnUywoGGIIAX9wXN7N&oh=dfefc03f014331a8d2bc81857f2d290c&oe=5F6AA2B0"
                    alt="Hamburguesa Zeta" name="Hamburgueseria Zeta"
                    description="Hamburguesa Z tradicional" cantidad="Cantidad: 1" price="15k"/>
                <a href="https://www.instagram.com" target="_blank">
                    <button onClick={() => window.alert("Vaya al perfil @HamburgueseriaZeta")}>PEDIR</button>
                </a>
            </div>

        </>

    )
}
export default Pagina3;