import React, { Component } from "react";
import Header from "../Header/Header";
import { Ropa } from "../Producto";
import Rating from '@material-ui/lab/Rating';
import Style from "./pagina3.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";


class PagoDetalle extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 4 };
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(event) {
        this.setState({ value: undefined });
      }
      render(){
    return (
        <>
            <div className={Style.contenedor}>
                <Ropa

                    src="https://cdn.discordapp.com/attachments/691988704352272454/759580237067190272/119048952_796729091121919_1641449694697305807_n.png"
                    alt="Detalle 3" name="LMSA Designer"
                    description="Vidrio personalizado" cantidad="Cantidad: 1" price="55k" />
                <a href="https://www.instagram.com" target="_blank">
                    <button onClick={() => window.alert("Vaya al perfil @LMSA_designer")}>PEDIR</button>
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

    )
}
}
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
export default connect(mapStateToProps, mapDispatchToProps)(PagoDetalle);