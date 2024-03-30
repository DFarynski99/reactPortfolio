import LeftPanel from "./LeftPanel/LeftPanel";
import LeftPanelLite from './LeftPanelLite/LeftPanelLite'
import Heroshot from "./Heroshot/Heroshot";
import About from "./About/About";
import Project from "./Project/Project";
import Capabilities from './Capabilities/Capabilities'
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



export default function HomePage(){

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.state?.scrollToCapabilities) {
            const capabilitiesContainer = document.getElementById("capabilitiesSection");
            if (capabilitiesContainer) {
                capabilitiesContainer.scrollIntoView({ behavior: "smooth" });

                // Clear the state after scrolling
                navigate(location.pathname, { replace: true, state: {} });
            }
        }
    }, [location, navigate]);

    return (
        <>
            <div id="AppContainer">
                <LeftPanel />
                <LeftPanelLite />
                <Heroshot />
                <About />
                <Capabilities />
                <Project />
                <Contact />
            </div>
            <Footer />
        </>
    );
}