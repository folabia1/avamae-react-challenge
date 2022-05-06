import "./css/App.css";

import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";

import companyLogo from "./media/Logo.svg";

const ScreenSizeContext = createContext(null);

function App() {
  const isLargeScreen = useMediaQuery({ query: "(min-width:900px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const isMediumScreen = !(isLargeScreen || isSmallScreen);

  return (
    <ScreenSizeContext.Provider value={{ isMediumScreen, isSmallScreen }}>
      <Router>
        <div
          className={
            "App" +
            (isSmallScreen ? " small-screen" : "") +
            (isMediumScreen ? " medium-screen" : "") +
            (isLargeScreen ? " large-screen" : "")
          }
        >
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
    </ScreenSizeContext.Provider>
  );
}

export default App;
