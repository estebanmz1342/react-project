import React from 'react';
import Style from "./Header.module.css"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link className={Style.link} to="/"><h1 className={Style.header_title}>InstaShop</h1></Link>
        </div>
    )
}

export default Header;