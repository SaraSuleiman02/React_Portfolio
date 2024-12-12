import React from "react";
// import { Link } from "react-router-dom";

function Navbar() {
    return (
  <nav id="navbar" className="bg">
    <div className="left-nav">
      <img src="/img/myLogo.png" alt="Sara Sleman" height={70} />
    </div>
    <div className="right-nav">
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
