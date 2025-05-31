/*
import "./Navbar.css";
*/
import { Link } from "react-router-dom";
import logo from "../../../assets/react.svg";

export function Navbar() {
    return (
        <nav className="bg-gray-800 text-white flex justify-between items-center px-6 py-4">
            <img src={logo} alt="react logo" className="w-10 h-10" />

            <ul className="flex gap-10 text-lg font-medium">
                <li>
                    <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
                </li>
            </ul>

            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded transition-colors">
                <Link to="/login">Login</Link>
            </button>
        </nav>
    );
}
