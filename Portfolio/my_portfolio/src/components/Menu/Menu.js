import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu(props) {
    return (
        <nav className='site-navigation'>
            <NavLink id={props.id} exact="true" to="/" activeclassname="active" className="side-link">
                Home
            </NavLink>
            <NavLink id={props.id} exact="true" to="/about" activeclassname="active" className="side-link">
                About
            </NavLink>
            <NavLink id={props.id} exact="true" to="/projects" activeclassname="active" className="side-link">
                Projects
            </NavLink>
            <NavLink id={props.id} exact="true" to="/contact" activeclassname="active" className="side-link">
                Contact
            </NavLink>
        </nav>
    );
}

export default Menu;