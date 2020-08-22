import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {Producto, Informacion} from "./components/Producto/"

function App() {
    const info = [{
        src: "https://ohmygeek.net/wp-content/uploads/2020/05/ASUS-VivoBook-14-M413IA-960x540.jpg",
        alt: "Primer intento :3",
        name: "VivoBook"
    }, {
        src: "https://ohmygeek.net/wp-content/uploads/2020/05/ASUS-VivoBook-14-M413IA-960x540.jpg",
        alt: "Segundo intento :3",
        name: "VivoBook2"
    }, {
        src: "https://ohmygeek.net/wp-content/uploads/2020/05/ASUS-VivoBook-14-M413IA-960x540.jpg",
        alt: "Tercer intento :3",
        name: "VivoBook3"
    }]
    return (
        <>
            <Header name="Ventas"/>
            {info.map((item, ) => {
                return <Producto key={item.name}src={item.src} alt={item.alt} name={item.name}/>;
            })}
            <Informacion/>
            <button onClick={() => window.alert("Es bonito saludar y ser saludado")}>HOliwis</button>

        </>

    );
}

export default App;
