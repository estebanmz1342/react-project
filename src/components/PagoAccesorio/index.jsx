import React, { Component } from "react";
import Header from "../Header/Header";
import { Comida } from "../Producto";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Style from "./pagina3.module.css";
import Login from "../../container/Login/Login";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";



class PagoAccesorio extends Component {
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
                    src="https://media.discordapp.net/attachments/691988704352272454/759583646909988884/120046530_183202300012695_3057444184010115438_n.png?width=499&height=499"
                    alt="Pulsera pareja" name="Pulseras Golden"
                    description="Pulseras Pareja Oro" cantidad="Cantidad: 1" price="220k" />
                <a href={Login} target="_blank">
                    <button onClick={() => window.alert("holi")}>PEDIR</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(PagoAccesorio);