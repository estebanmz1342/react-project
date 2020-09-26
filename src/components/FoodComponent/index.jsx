import React, {Component} from 'react';
import RelatedInfo from "../Sidebar";
import {Comida} from "../Producto";
import "./index.css"
import axios from "axios";

class FoodComponent extends Component {

    state = {
        food: [],
    }
    async fetchData() {
        try{
            const response =  await axios.get('./FOOD.json');
            this.setState({food: response.data});
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
        const relInfo = [{
        relInfo1: "Comida Saludable",
        relInfo2: "Almuerzo Casero",
        relInfo3: "Fast Food",
        relInfo4: "Snaks y postres"
        }];
        return (
            <>
                <div className="contenedor-pagina2">
                    <div className="contenedor-comida">
                        {/*relInfo.map((item) => {
                            return <RelatedInfo key={item.name} relInfo1={item.relInfo1} relInfo2={item.relInfo2}
                                                relInfo3={item.relInfo3} relInfo4={item.relInfo4}/>;
                        })*/}
                        {this.state.food.map((item) => {
                            return <Comida key={item.name} src={item.src} alt={item.alt} name={item.name}
                                           description={item.description}/>;
                        })}
                    </div>

                </div>

            </>
        )
    }


}

export default FoodComponent;