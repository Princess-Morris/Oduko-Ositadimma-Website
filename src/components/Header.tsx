import React, { useEffect, useState } from "react";

function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    // const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("/");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    useEffect(() => {
        const { pathname } = window.location;
        setActiveLink(pathname)
    }, [])

    const handleLinkClick = (link: string) => {
        window.location.href = link;
        setActiveLink(link)

        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <div className="header">
            <h1 className="logo" >
                <span className="logo-span">O</span>
                <span className="d-logo">d</span>
                <span className="u-logo">u</span>
                <span className="k-logo">k</span>
                {/* uk */}
                <span className="logo-span">o</span>
            </h1>

            <nav id="navbar"
                className={`nav ${isMobileMenuOpen ? "nav-mobile" : ""}`}>
                <ul>
                    <li>
                        <a className={`nav-link ${activeLink === "/home" ? "active" : ""}`}
                            href="/home"
                            onClick={()=> handleLinkClick("/home")}
                            >
                                Home
                        </a>
                    </li>
                    <li>
                        <a className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
                            href="/about"
                            onClick={() => handleLinkClick("/about")}
                            >
                                About
                        </a>
                    </li>
                    <li>
                        <a className={`nav-link ${activeLink === "/books" ? "active" : ""}`}
                            href="/books"
                            onClick={() => handleLinkClick("/books")}
                            >
                                books
                        </a>
                    </li>
                    <li>
                        <a className={`nav-link ${activeLink === "/blogs" ? "active" : ""}`}
                            href="#"
                            onClick={() => handleLinkClick("/more")}
                            >
                                More
                        </a>
                    </li>

                </ul>
                <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} mobile-nav-toggle`} onClick={toggleMobileMenu}></i>

            </nav>

            <div className="media">
                <ul>
                    <li>
                        <a href="">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className="fab fa-x"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/ositadimma-oduko-a349481b3">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>

            </div>

        </div>


    )
}

export default Header;