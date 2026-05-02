import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects"> All Projects</Link></li>
            </ul>
            <h1>P5.JS PROJECTS</h1>
        </nav>
    )
}

export default NavBar;