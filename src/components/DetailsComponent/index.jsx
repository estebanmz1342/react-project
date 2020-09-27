import React, {Component} from 'react';
import {Detalle} from "../Producto";
import Style from "./index.module.css"
import axios from "axios";

class AccessoriesComponent extends Component {

    state = {
        accessories: [],
    }
    async fetchData() {
        try{
            const response =  await axios.get('./DETAILS.json');
            this.setState({accessories: response.data});
        }catch (e) {
            if (e instanceof Error){
                console.log(e.message);
            }else{
                console.log("Error trayendo la información")
            }
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <>
                <div className={Style.contenedor_pagina2}>
                    <div className={Style.contenedor_detalles}>
                        {this.state.accessories.map((item) => {
                            return <Detalle key={item.name} src={item.src} alt={item.alt} name={item.name} price={item.price}
                                           description={item.description}/>;
                        })}
                    </div>
                </div>

            </>
        )
    }


}

export default AccessoriesComponent;