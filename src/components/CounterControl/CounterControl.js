import React from 'react';

import Style from './CounterControl.module.css';

const counterControl = (props) => (
    <div className={Style.CounterControl} onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;