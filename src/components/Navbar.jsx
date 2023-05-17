import './Navbar.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/details">Details</NavLink>
        </div>
    )
}

export default Navbar;