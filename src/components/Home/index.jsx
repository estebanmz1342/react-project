import React from 'react';
import Header from "../Header/Header";
import {Producto} from "../Producto";
import "./style.css"

const Home = () => {
    const mainInfo = [{
        src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/10/16/online-clothes-shops-hero.jpg?width=990",
        alt: "Clothes image",
        name: "Ropa"
    }, {
        src: "https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg",
        alt: "Food image",
        name: "Comida"
    }, {
        src: "http://yeux.com.mx/ColumnaUniversitaria/wp-content/uploads/2014/07/tiendita.jpg",
        alt: "Miscellany image",
        name: "Miscelanea y accesorios"
    }, {
        src: "https://cdnx.jumpseller.com/toniytanacom/image/3435646/resize/540/540?1592843898",
        alt: "Surprise image",
        name: "Detalles para regalos"
    }]
    return (
        <>
            <Header name="InstaShop"/>
            <div className="contenedor-pagina1">
                {mainInfo.map((item) => {
                    return <Producto key={item.name} src={item.src} alt={item.alt} name={item.name}/>;
                })}
            </div>

        </>
    )
}

export default Home;