import "./App.css"
import {Navbar} from "./view/common/Navbar/Navbar.tsx";
import {MainContent} from "./view/common/MainContent/MainContent.tsx";
import {Footer} from "./view/common/Footer/Footer.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
       <>
           <BrowserRouter>
           <Navbar/>
           <MainContent/>
           <Footer/>
           </BrowserRouter>
       </>
    );
}

export default App;