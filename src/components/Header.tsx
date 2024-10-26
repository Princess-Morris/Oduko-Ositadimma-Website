import React from "react";
import Logo from "./Logo";
import Media from "./Media";
import Nav from "./Nav";

function Header(){
    return(
        <div className="header">
            <Logo />
            <Nav />
            <Media />
        </div>
    )
}

export default Header;