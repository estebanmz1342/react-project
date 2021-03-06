import React, { Component } from "react";
import { Ropa } from "../Producto";
import Style from "./index.module.css";
import axios from "axios";

class ClothesComponent extends Component {
  state = {
    clothes: [],
  };
  async fetchData() {
    try {
      const response = await axios.get("./CLOTHES.json");
      this.setState({ clothes: response.data });
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      } else {
        console.log("Error trayendo la información");
      }
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <div className={Style.contenedor_pagina1}>
          <div className={Style.contenedor_ropa}>
            {this.state.clothes.map((item) => {
              return (
                <Ropa
                  key={item.name}
                  src={item.src}
                  alt={item.alt}
                  name={item.name}
                  description={item.description}
                  talla={item.talla}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ClothesComponent;
