import React from 'react';
import Header from "../Header/Header";
import {Comida} from "../Producto";
import "./pagina3.css"

const PagoComida = () => {
    return (
        <>
            <div className="contenedor">
                <Comida
                    src="https://instagram.fbog8-1.fna.fbcdn.net/v/t51.2885-15/e35/119379262_606890546648760_8852724859130531005_n.jpg?_nc_ht=instagram.fbog8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=LozFolqDnKoAX9YUZ3U&_nc_tp=18&oh=38124fdec90a2b4f4bb6abf8f194d612&oe=5F99B049"
                    alt="Hamburguesa Zeta" name="Hamburgueseria Zeta"
                    description="Hamburguesa Z tradicional" cantidad="Cantidad: 1" price="15k"/>
                <a href="https://www.instagram.com" target="_blank">
                    <button onClick={() => window.alert("Vaya al perfil @HamburgueseriaZeta")}>PEDIR</button>
                </a>
            </div>




        </>

    )
}
export default PagoComida;