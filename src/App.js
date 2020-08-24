import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {Producto, Comida} from "./components/Producto/"
import RelatedInfo from "./components/Sidebar"

function App() {
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
            <Header name="InstaShop"/>
            {mainInfo.map((item) => {
                return <Producto key={item.name} src={item.src} alt={item.alt} name={item.name}/>;
            })}
            <h2>---------------------o-----------------------------------------o---------------------------------------o-----------------------------------o--------------</h2>
            <br/>
            <Header name="InstaShop"/>
            {relInfo.map((item) => {
                return <RelatedInfo key={item.name} relInfo1={item.relInfo1} relInfo2={item.relInfo2}
                                    relInfo3={item.relInfo3} relInfo4={item.relInfo4}/>;
            })}
            {foodInfo.map((item) => {
                return <Comida key={item.name} src={item.src} alt={item.alt} name={item.name}
                               description={item.description}/>;
            })}
            <h2>---------------------o-----------------------------------------o---------------------------------------o-----------------------------------o--------------</h2>
            <br/>
            <Header name="InstaShop"/>
            <Comida
                src="https://instagram.fbog2-3.fna.fbcdn.net/v/t51.2885-15/e35/118088804_956241164849118_1203866465920334624_n.jpg?_nc_ht=instagram.fbog2-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=ysnUywoGGIIAX9wXN7N&oh=dfefc03f014331a8d2bc81857f2d290c&oe=5F6AA2B0"
                alt="Hamburguesa Zeta" name="Hamburgueseria Zeta"
                description="Hamburguesa Z tradicional" cantidad="Cantidad: 1" price="15k"/>
            <button onClick={() => window.alert("Vaya al perfil @HamburgueseriaZeta")}>Pedir</button>

        </>

    );
}

export default App;
