import "./MainContent.css";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home.tsx";
export function MainContent() {
    return (
        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
    );
}