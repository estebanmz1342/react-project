import React, {Component} from 'react';
import {Accesorio} from "../Producto";
import "./index.css"
import axios from "axios";

class AccessoriesComponent extends Component {

    state = {
        accessories: [],
    }
    async fetchData() {
        try{
            const response =  await axios.get('./ACCESSORIES.json');
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
                <div className="contenedor-pagina2">
                    <div className="contenedor-accesorios">
                        {this.state.accessories.map((item) => {
                            return <Accesorio key={item.name} src={item.src} alt={item.alt} name={item.name}
                                           description={item.description}/>;
                        })}
                    </div>
                </div>

            </>
        )
    }


}

export default AccessoriesComponent;