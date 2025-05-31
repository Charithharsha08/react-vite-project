import {Navbar} from "../Navbar/Navbar.tsx";
import {MainContent} from "../MainContent/MainContent.tsx";
import {Footer} from "../Footer/Footer.tsx";

export function DefaultLayout() {
    return (
        <>
        <div className="default-layout w-full h-screen ">
            <Navbar/>
            <MainContent/>
            <Footer/>
        </div>
        </>
    );
}