import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="navbar" className="bg">
      <div className="left-nav">
        <img src="/img/myLogo.png" alt="Sara Sleman" height={70} />
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`right-nav ${isMenuOpen ? "active" : ""}`}>
        <ul id="navbar-nav">
          <li>
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="nav-link" href="#proj">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#testi">
              Testimonials
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
