import React from 'react';

import Style from './CounterOutput.module.css';

const counterOutput = (props) => (
    <div className={Style.CounterOutput}>
        <p>Productos:</p> 
        <p>{props.value}</p>
    </div>
);

export default counterOutput;