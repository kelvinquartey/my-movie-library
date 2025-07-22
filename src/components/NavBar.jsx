import { Link } from "react-router-dom";
import "../css/Navbar.css"
import logo from "../assets/images/my-movie-list-logo-transparent.png"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"><img src={logo} alt="logo"  className="logo"/></Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
            <Link to="/watchlater" className="nav-link">Watch Later</Link>
        </div>
    </nav>
}

export default NavBar