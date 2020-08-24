import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li className="navItem"><a href="">Ropa</a></li>
                    <li className="navItem"><a href="">Comida</a></li>
                    <li className="navItem"><a href="">Miscelanea y accesorios</a></li>
                    <li className="navItem"><a href="">Detalles</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;