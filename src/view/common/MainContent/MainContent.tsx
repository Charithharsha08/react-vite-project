import "./MainContent.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
import {About} from "../../pages/About/About.tsx";
import {Contact} from "../../pages/Contact/Contact.tsx";
import {ShoppingCart} from "../../pages/Shopping Cart/ShoppingCart.tsx";
import {itemList} from "../Modify/ModifyCart.tsx";
export function MainContent() {
    return (
        <div className="flex items-center justify-center w-full h-full bg-gray-100">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
            <Route path="/shopping-cart" element={<ShoppingCart itemsList={itemList}/>}/>
        </Routes>
        </div>

    );
}