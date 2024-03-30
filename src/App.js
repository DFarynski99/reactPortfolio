import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CaptchaBypass from './components/CaptchaBypass/CaptchaBypass'
import WebScraping from './components/WebScraping/WebScraping'
import HomePage from './components/HomePage'
import "./App.css";

function App() {
  return (
    <>
        <Router>
                {/* Your navigation and other content */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/webscraping" element={<WebScraping />} />
                    <Route path="/captchabypass" element={<CaptchaBypass />} />

                    {/* ... other routes */}
                </Routes>
        </Router>
    </>
  );
}

export default App;
