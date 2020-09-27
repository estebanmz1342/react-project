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
import FoodPay from "../../container/FoodPay";

const Routing = () => {
    return (
        <Router>
            <Navbar />
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/clothes" component={Clothes}/>
                <Route exact path="/food" component={Food}/>
                <Route exact path="/food/pay" component={FoodPay}/>
                <Route exact path="/details" component={Details}/>
                <Route exact path="/accessories" component={Accessories}/>
                <Route exact path="/login" component={Login}/>
                <Route component={ErrorPage}/>
            </Switch>
        </Router>
    );

}

export default Routing;