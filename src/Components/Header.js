import React from "react";

import twitter_logo from "../Assets/twitter_logo.png";

const Header = () => {
    return <header id="header">
        <div className="header-container">
            <img src={twitter_logo} className="Twitter-logo" alt="Twitter Logo"/>
            <h1>Twitter Stream</h1>
        </div>
    </header>
};

export default Header;