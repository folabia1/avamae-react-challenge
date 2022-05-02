import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/ContactUs';

import { LoginButton } from "./components/LoginButton";

import companyLogo from "./media/Logo.svg";


function App() {
  return (
    <Router>
      
        <div className="App">

            <header>
              <img id="logo" src={companyLogo} alt="logo"/>
              <nav className="navLinks">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/about-us">About Us</Link>
                <Link className="navLink" to="/contact-us">Contact Us</Link>
                <LoginButton />
              </nav>
            </header>

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
              </Routes>
            </main>

            <footer>
              <p>Website Devlopment by <a href="www.avamae.co.uk">AVAMAE</a></p>
            </footer>
        </div>
      
    </Router>
  );
}

export default App;