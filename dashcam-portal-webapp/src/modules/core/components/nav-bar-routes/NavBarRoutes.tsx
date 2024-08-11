import { NavLink } from 'react-router-dom';
import './NavBarRoutes.scss';

function NavBarRoutes() {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink
                    className={({ isActive }) =>
                        'nav-link' + (isActive ? ' active' : '')
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink
                    className={({ isActive }) =>
                        'nav-link' + (isActive ? ' active' : '')
                    }
                    to="/vehicles"
                >
                    Vehicles
                </NavLink>
            </li>
        </ul>
    );
}

export default NavBarRoutes;
