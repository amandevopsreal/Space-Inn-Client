import React from 'react'
import "./Navbar.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const fun = () => {
        const dropDownMenu = document.querySelector('.dropdown_menu');
        const toggleBtnIcon = document.querySelector('.toggle_btn i');
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ?
            'fa-solid fa-xmark'
            : 'fa-solid fa-bars'

    }
    return (
        <div className="box view">
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
                        <div className="text-wrapper">Manage Rental</div>
                        <div className="div">Help</div>
                        <img className="vector" alt="Vector" src="https://i.ibb.co/HNwrXHy/Vector-1.png" />
                        <img className="img" alt="Vector" src="https://i.ibb.co/6RspvRr/Vector.png" />
                    </div>
                    <div className="toggle_btn" onClick={fun}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className="dropdown_menu">
                    <li className=''><Link to="">Buy</Link></li>
                    <li><Link to="">Sell</Link></li>
                    <li><Link to="">Rent</Link></li>
                    <li><Link to="">Agent Finder</Link></li>
                    <li><Link to="">Manage Rental</Link></li>
                    <li><Link to="">Help</Link></li>

                </div>
            </div>
        </div>

    )
}

export default Navbar



