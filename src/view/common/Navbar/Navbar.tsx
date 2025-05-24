import "./Navbar.css";
import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <ul className="navbar">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
        </ul>
    );
}