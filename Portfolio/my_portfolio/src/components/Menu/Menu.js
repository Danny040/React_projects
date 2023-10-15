import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav className='site-navigation'>
            <NavLink exact="true" to="/" activeclassname="active" className="side-link">
                Home
            </NavLink>
            <NavLink exact="true" to="/about" activeclassname="active" className="side-link">
                About
            </NavLink>
            <NavLink exact="true" to="/projects" activeclassname="active" className="side-link">
                Projects
            </NavLink>
            <NavLink exact="true" to="/contact" activeclassname="active" className="side-link">
                Contact
            </NavLink>
        </nav>
    );
}

export default Menu;