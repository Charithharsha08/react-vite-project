import "./App.css"
import {Navbar} from "./view/common/Navbar/Navbar.tsx";
import {MainContent} from "./view/common/MainContent/MainContent.tsx";

function App() {
    return (
       <>
           <Navbar/>
           <MainContent/>
       </>
    );
}

export default App;