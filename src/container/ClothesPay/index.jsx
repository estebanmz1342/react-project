import React, { Component } from 'react';
import { connect } from 'react-redux';

import PagoRopa from "../../components/PagoRopa";



class ClothesPay extends Component {
    render () {
        return (
            <div className="counter-container">
                <PagoRopa />
                
            </div>
            
        );
    }
}



export default ClothesPay;