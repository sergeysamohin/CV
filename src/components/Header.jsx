import React from "react";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">

            <div className="header-left">
                <h1>SAMOKHIN SIARHEI</h1>
                <p>Frontend developer</p>
                <ul>
                    <a href="https://t.me/srgsm09" id="tg"><li>@srgsm09</li></a>
                    <a href="mailto:sergeyyout99@gmail.com" id="email"><li>sergeyyout99@gmail.com</li></a>
                    <li id="location">Minsk</li>
                </ul>
            </div>
            <div className="header-right">
                <img
                    src="/myphotoo.jpg"
                    alt="Author"
                    className="header-photo"
                />
            </div>
        </header>
    );
};

export default Header;
