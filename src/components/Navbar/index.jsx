import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li className="navItem"><a href="/clothes">Ropa</a></li>
                    <li className="navItem"><a href="/food">Comida</a></li>
                    <li className="navItem"><a href="/accessories">Miscelanea y accesorios</a></li>
                    <li className="navItem"><a href="/details">Detalles</a></li>
                    <li className="navItem"><a href="">Log in</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;