/*
import "./Navbar.css";
*/
import { Link } from "react-router-dom";
import logo from "../../../assets/logo/Parts-LK-Logo.png";
export function Navbar() {
    return (
        <nav className="bg-amber-500 text-white flex justify-between items-center px-6 py-4">

            <div className="flex items-center">
                <img src={logo} alt="Parts-LK Logo" className="w-48 h-12 mr-3" />
            </div>

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
                <li>
                    <Link to="/shopping-cart" className="hover:text-cyan-400 transition-colors">Shopping Cart</Link>
                </li>
            </ul>

            <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded transition-colors">
                <Link to="/login">Login</Link>
            </button>
        </nav>
    );
}
