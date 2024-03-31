import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CaptchaBypass from "./components/CaptchaBypass/CaptchaBypass";
import WebScraping from "./components/WebScraping/WebScraping";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/webscraping" element={<WebScraping />} />
                <Route path="/captchabypass" element={<CaptchaBypass />} />
            </Routes>
        </Router>
    );
}

export default App;
