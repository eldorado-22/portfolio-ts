import React from 'react';
import "./header.scss";
import logo from "././../../assets/img/logo.svg";



const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="img"/>
                    <nav className="header--navBar">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Portfolio</a>
                        <a href="#">Contact</a>
                    </nav>
                    <button>Dark</button>
                </div>
            </div>
        </header>
    );
};

export default Header;