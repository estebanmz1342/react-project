import React from 'react';
import "./Header.css"
const Header = (props) => {
    return (
        <div>
            <h1><a className="header-title" href="/home">{props.name}</a></h1>
        </div>

    )
}

export default Header;