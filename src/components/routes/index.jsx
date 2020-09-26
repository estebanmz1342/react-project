import React from "react";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "../../container/Home"
import Clothes from "../../container/Clothes"
import Food from "../../container/Food"
import Details from "../../container/Details"
import Accessories from "../../container/Accessories"
import Login from "../../container/Login"
import Navbar from "../Navbar";
import Header from "../Header/Header";
import ErrorPage from "../../container/ErrorPage";

const Routing = () => {
    return (
        <Router>
            <Navbar />
            <Header />
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/clothes" component={Clothes}/>
                <Route path="/food" component={Food}/>
                <Route path="/details" component={Details}/>
                <Route path="/accessories" component={Accessories}/>
                <Route path="/login" component={Login}/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    );

}

export default Routing;