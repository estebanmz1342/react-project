import React, { Component } from "react";
import Header from "../Header/Header";
import { Comida } from "../Producto";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Style from "./pagina3.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";




class PagoComida extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 4 };
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event) {
        this.setState({ value: undefined });
      }
    render() {
    return (
        <>
            <div className={Style.contenedor}>
                <Comida
                    src="https://instagram.fbog8-1.fna.fbcdn.net/v/t51.2885-15/e35/119379262_606890546648760_8852724859130531005_n.jpg?_nc_ht=instagram.fbog8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=LozFolqDnKoAX9YUZ3U&_nc_tp=18&oh=38124fdec90a2b4f4bb6abf8f194d612&oe=5F99B049"
                    alt="Hamburguesa Zeta" name="Hamburgueseria Zeta"
                    description="Hamburguesa Z tradicional" cantidad="Cantidad: 1" price="15k" />
                <a href="https://www.instagram.com" target="_blank">
                    <button onClick={() => window.alert("Vaya al perfil @HamburgueseriaZeta")}>PEDIR</button>
                </a>
                <div>
            <Rating
              name="simple-controlled"
              {...this.props}
              value={this.state.value}
            />
          </div>
          <div>
            <CounterOutput value={this.props.ctr} />
            <CounterControl
              label="-"
              clicked={() => this.props.onDecrementCounter()}
            />
            <CounterControl
              label="+"
              clicked={() => this.props.onIncrementCounter()}
            />
          </div>
            </div>




        </>

    );
}}
const mapStateToProps = (state) => {
    return {
      ctr: state.counterStore.counter,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
      onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(PagoComida);