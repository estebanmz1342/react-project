import React from 'react';
import Header from "../Header/Header";
import RelatedInfo from "../Sidebar";
import {Comida} from "../Producto";
import "./pagina2.css"

const Pagina2 = () => {
    const relInfo = [{
        relInfo1: "Comida Saludable",
        relInfo2: "Almuerzo Casero",
        relInfo3: "Fast Food",
        relInfo4: "Snaks y postres"
    }]
    const foodInfo = [{
        src: "https://instagram.fbog2-3.fna.fbcdn.net/v/t51.2885-15/e35/118088804_956241164849118_1203866465920334624_n.jpg?_nc_ht=instagram.fbog2-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ysnUywoGGIIAX9wXN7N&oh=dfefc03f014331a8d2bc81857f2d290c&oe=5F6AA2B0",
        alt: "Hamburguesa Zeta",
        name: "Hamburgueseria Zeta",
        description: "Hamburguesa Z tradicional",
        cantidad: 1,
        price: "15k"
    }, {
        src: "https://instagram.fbog2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/99083039_250329966043033_1523062774701758590_n.jpg?_nc_ht=instagram.fbog2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=fZk6_7KDxkoAX9RbG4n&oh=779f6a58d116ddeed9c5158fda851fad&oe=5F6C63C2",
        alt: "Perro Americano",
        name: "Perros Calientes Guerrero",
        description: "Perro americano tradicional",
        cantidad: "Cantidad: 2",
        price: "12k"
    }]
    return (
        <>
            <div className="contenedor-pagina2">
                <Header name="InstaShop"/>
                <div className="contenedor-comida">
                    {relInfo.map((item) => {
                        return <RelatedInfo key={item.name} relInfo1={item.relInfo1} relInfo2={item.relInfo2}
                                            relInfo3={item.relInfo3} relInfo4={item.relInfo4}/>;
                    })}
                    {foodInfo.map((item) => {
                        return <Comida key={item.name} src={item.src} alt={item.alt} name={item.name}
                                       description={item.description}/>;
                    })}
                </div>

            </div>

        </>
    )
}

export default Pagina2;