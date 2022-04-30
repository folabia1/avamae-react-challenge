import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

import arrowIcon from "./media/Icon_Arrow.svg";
import submitIcon from "./media/Icon_Submit.svg";
import validIcon from "./media/Icon_Valid.svg";
import companyLogo from "./media/Logo.svg";
import companyIcon from "./media/Img_Contact.png";

import heroImageWoman from "./media/shutterstock_407632243.jpg";
import secondaryImageWoman from "./media/shutterstock_1302552622.jpg";
import roomImage1 from "./media/shutterstock_696636346.jpg";
import roomImage2 from "./media/shutterstock_696636415.jpg";

export const UserContext = createContext(null);

function App() {
  const [ user, setUser ] = useState(null);

  return (
    <Router>
      
        <div className="App">
          <UserContext.Provider value={{user, setUser}}>

            <nav className="navbar">
              <Link className="navLink" to="/"><img src={companyLogo} id="title" /></Link>
              <nav className="navLinks">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/about-us">About Us</Link>
                <Link className="navLink" to="/contact-us">Contact Us</Link>
                <button>Log in</button>
              </nav>
            </nav>

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
              </Routes>
            </main>

          </UserContext.Provider>

        </div>
      
    </Router>
  );
}

export default App;