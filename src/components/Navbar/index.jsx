import React from 'react';
import "./navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className="navigation">
                <li className="navItem"><Link to="/clothes">Ropa</Link></li>
                <li className="navItem"><Link to="/food">Comida</Link></li>
                <li className="navItem"><Link to="/accessories">Miscelanea y accesorios</Link></li>
                <li className="navItem"><Link to="/details">Detalles</Link></li>
                <li className="navItem"><Link to="/login">Log in</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;