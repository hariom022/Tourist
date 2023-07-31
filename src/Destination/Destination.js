import React from "react";
import './Destination.scss'

const Destination=()=>{


    return(
        <div className="Destination-container">
            <div className="destination">
                <h5>Destination</h5>
                <h1>Popular Destinations</h1>
                <div className="grid-img">
                    <div className="item1">
                    <img src="destination-1.jpg" alt="" />
                    <div className="offer-off">
                    <p >30% OFF</p>
                    </div>
                    <div className="location">
                    <p >Thailand</p>
                    </div>
                    
                    
                    </div>
                    <div className="item2">
                    <img src="destination-2.jpg" alt="" />
                    <div className="offer-off">
                    <p >25% OFF</p>
                    </div>
                    <div className="location">
                    <p >Malaysia</p>
                    </div>
                    </div>
                    <div className="item3">
                    <img src="destination-3.jpg" alt="" />
                    <div className="offer-off">
                    <p >35% OFF</p>
                    </div>
                    <div className="location">
                    <p >Australia</p>
                    </div>
                    </div>
                    <div className="item4">
                    <img src="destination-4.jpg" alt="" />
                    <div className="offer-off">
                    <p >20% OFF</p>
                    </div>
                    <div className="location">
                    <p >Indonesiya</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Destination