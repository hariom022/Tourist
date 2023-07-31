import React from "react";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="navbar-nav">
        <h1>Tourist</h1>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Packages</li>
          <div className="drop-menu">
            <li>Page</li>
            <div className="drop-down">
              <li>Destination</li>
              <li>Booking</li>
              <li>Travel Guides</li>
              <li>Testimonial</li>
            </div>
          </div>

          <li>Contact</li>
          <li>Register</li>
        </ul>
      </div>
      <img src="bg-hero.jpg" alt="" />

      <div className="content-button-container">
        <h1>Enjoy  Your  Vacation  With  Us</h1>
        <p>
          Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum
          lorem sit
        </p>
        <div className="search-btton">
          <input type="text" placeholder="Eg: Thailand"/>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
