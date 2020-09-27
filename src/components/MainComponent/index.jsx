import React, {Component} from 'react';
import {Producto} from "../Producto";
import Style from "./style.module.css"
import axios from 'axios';

class MainComponent extends Component{
    state = {
        home: [],
    }

    async fetchData() {
        try{
            const response =  await axios.get('./HOME.json');
            this.setState({home: response.data});
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
            <div className={Style.contenedor_paginaP}>
                {this.state.home.map((item) => {
                    return <Producto key={item.name} src={item.src} alt={item.alt} name={item.name} link={item.link} />;
                })}
            </div>
        );
    }



}

export default MainComponent;