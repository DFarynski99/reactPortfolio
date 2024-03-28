import LeftPanel from "./components/LeftPanel/LeftPanel";
import Heroshot from "./components/Heroshot/Heroshot";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div id="AppContainer">
        <LeftPanel />
        <Heroshot />
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
