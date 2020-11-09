import React from 'react';
import Style from "./navbar.module.css"
import {Link} from "react-router-dom";
import {useUser} from 'reactfire';

const Navbar = () => {
    const user = useUser();
    return (
        <nav>
            <ul className={Style.navigation}>
                <li className={Style.navItem}><Link to="/clothes">Ropa</Link></li>
                <li className={Style.navItem}><Link to="/food">Comida</Link></li>
                <li className={Style.navItem}><Link to="/accessories">Accesorios</Link></li>
                <li className={Style.navItem}><Link to="/details">Detalles</Link></li>
                {!user &&
                <li className={Style.navItem}><Link to="/login">Log in</Link></li>
                }
                {user && <li className={Style.navItem}><Link to="/login">{user.email}</Link></li>
                }
            </ul>
        </nav>
    )
}
export default Navbar;