import React, { Component } from "react";
import { Ropa } from "../Producto";
import Rating from "@material-ui/lab/Rating";
import Style from "./pagina3.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class PagoRopa extends Component {
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
          <Ropa
            src="https://cdn.discordapp.com/attachments/547231002628456450/759200293211734026/unknown.png"
            alt="Buso Negro"
            name="Oneline Brand"
            description="Hoodie Negro-Rana"
            cantidad="Cantidad: 1"
            price="90k"
          />
          <a href="https://www.instagram.com" target="_blank">
            <button
              onClick={() => window.alert("Vaya al perfil @Oneline_brand")}
            >
              PEDIR
            </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(PagoRopa);
