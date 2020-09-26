import React from 'react';
import "./Header.css"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link className="link" to="/home"><h1 className="header-title">InstaShop</h1></Link>
        </div>

    )

}

export default Header;