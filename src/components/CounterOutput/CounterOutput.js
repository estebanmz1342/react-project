import React from 'react';

import Style from './CounterOutput.module.css';

const counterOutput = (props) => (
    <div className={Style.CounterOutput}>
        <p>Cantidad:</p> 
        <p>{props.value}</p>
    </div>
);

export default counterOutput;