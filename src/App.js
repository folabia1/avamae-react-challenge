import "./css/App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";

import companyLogo from "./media/Logo.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavLink id="logo" to="/">
            <img src={companyLogo} alt="logo" />
          </NavLink>
          <nav className="navLinks">
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
            <NavLink className="navLink" to="/about-us">
              About Us
            </NavLink>
            <NavLink className="navLink" to="/contact-us">
              Contact Us
            </NavLink>
            <button className="login-button">Log in</button>
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
          <p>
            Website Devlopment by <a href="www.avamae.co.uk">AVAMAE</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
