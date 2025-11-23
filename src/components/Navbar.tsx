import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-item">Feed</Link>
            <Link to="/create" className="nav-item">Create</Link>
            <Link to="/profile/1" className="nav-item">Profile</Link>
        </nav>
    );
}

export default Navbar;
