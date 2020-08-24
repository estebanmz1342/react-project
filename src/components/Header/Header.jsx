import React from 'react';
import "./Header.css"
const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>

    )
}

export default Header;