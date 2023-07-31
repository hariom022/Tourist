import React from "react";
import './Header.scss'


const Header=()=>{

    return(
        <div className="Header-container">
            <div className="social-contact">
                <div className="location-phone">
                <small><i class='fas fa-map-marker-alt'></i>123 Street, New York, USA</small>
                <small><i class='fas fa-phone'></i>+012 345 6789</small>
                <small><i class="fa fa-envelope-open"></i>hariTourist.ac.in</small>
                </div>
                <div className="social-icons">
                    <span>
                    <a href="#" class="fa fa-facebook" ></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-linkedin"></a>
                    <a href="#" class="fa fa-youtube"></a>
                    </span>

                </div>
              


            </div>

        </div>
    )
}
export default Header