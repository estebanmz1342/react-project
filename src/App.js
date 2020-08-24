import React from 'react';
import './App.css';
import Pagina1 from "./components/Pagina1/"
import Pagina2 from "./components/Pagina2"
import Pagina3 from "./components/Pagina3"
import Navbar from "./components/Navbar/"

function App() {
    return (
        <>
            <Navbar/>
            <Pagina1 />
            <hr/>
            <Pagina2/>
            <hr/>
            <Pagina3/>
        </>

    );
}

export default App;
