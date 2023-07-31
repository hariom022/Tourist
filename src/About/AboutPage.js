import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about">
        <img src="about.jpg" alt="" />
        <div className="about-section">
          <h6 >About Us</h6>

          <h1>
            Welcome To <span>Tourist</span>
          </h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="menu-container">
            <div className="menu1">
              <p>
                <i class="fa fa-arrow-right"></i> First Class Flights
              </p>
              <p>
                <i class="fa fa-arrow-right"></i> Handpicked Hotels
              </p>
              <p>
                <i class="fa fa-arrow-right"></i> 5 Star Accommodations
              </p>
            </div>
            <div className="menu2">
              <p>
                <i class="fa fa-arrow-right"></i> Latest Model Vehicles
              </p>
              <p>
                <i class="fa fa-arrow-right"></i> 150 Premium City Tours
              </p>
              <p>
                <i class="fa fa-arrow-right"></i> 24/7 Service
              </p>
            </div>
          </div>
          <div className="read-more">
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
