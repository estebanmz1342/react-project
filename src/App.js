import React from 'react';
import './App.css';
import Home from "./components/Home/"
import Pagina2 from "./components/Pagina2"
import Pagina3 from "./components/Pagina3"
import Navbar from "./components/Navbar/"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/food">
                        <Pagina2/>
                    </Route>
                    <Route path="/">
                    <Home/>
                </Route>
                </Switch>
            </Router>



        </>

    );
}

export default App;
