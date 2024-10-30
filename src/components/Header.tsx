import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Media from "./Media";

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