import React from 'react';
import Style from "./navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className={Style.navigation}>
                <li className={Style.navItem}><Link to="/clothes">Ropa</Link></li>
                <li className={Style.navItem}><Link to="/food">Comida</Link></li>
                <li className={Style.navItem}><Link to="/accessories">Accesorios</Link></li>
                <li className={Style.navItem}><Link to="/details">Detalles</Link></li>
                <li className={Style.navItem}><Link to="/login">Log in</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;