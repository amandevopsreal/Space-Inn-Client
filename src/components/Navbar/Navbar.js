import React from 'react'
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className="box">
            <div className="group">
                <div className="overlap-group">

                    <div className="navbar">
                        <div className="text-wrapper">Buy</div>
                        <div className="text-wrapper">Sell</div>
                        <div className="text-wrapper">Rent</div>
                        <div className="div">Agent Finder</div>
                    </div>
                    <img className="icon" alt="Icon" src="https://i.ibb.co/1d5Hxrw/Screenshot-429.png" />
                    <div className="frame">
                        <div className="text-wrapper-2">Manage Rental</div>
                        <div className="div">Help</div>
                        <img className="vector" alt="Vector" src="https://i.ibb.co/HNwrXHy/Vector-1.png" />
                        <img className="img" alt="Vector" src="https://i.ibb.co/6RspvRr/Vector.png" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar



