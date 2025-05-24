import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "../../../assets/react.svg"

export function Navbar() {
    return (
        <ul className="bg-gray-800 text-white flex justify-between items-center p-4">
            <img src={logo} alt="react logo" />
            <ul className="navbar-links">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
            <button >
                <Link to = {"/login"}>Login</Link>
            </button>
        </ul>
    );
}