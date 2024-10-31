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
        
        if (!link.startsWith('#')){
            window.location.href = link;
        }
        setActiveLink(link)

        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <div className="header">
            <a 
            href="/"
            className="logo">
            <h1>
                <span className="first-logo">O</span>
                <span className="d-logo">d</span>
                <span className="u-logo">u</span>
                <span className="k-logo">k</span>
                <span className="o-logo">o</span>
            </h1>
            <h5>
                <span className="l-logo">L</span>
                <span className="e-logo">e</span>
                <span className="a-logo">a</span>
                <span className="r-logo">r</span>
                <span className="n-logo">n</span>
                
                <span className="i-logo">I</span>
                <span className="g-logo">g</span>
                <span className="b-logo">b</span>
                <span className="last-logo">o</span>
            </h5>
            </a>

            <nav id="navbar"
                className={`nav ${isMobileMenuOpen ? "nav-mobile" : ""}`}>
                <ul>
                    <li>
                        <a className={`nav-link ${activeLink === "/" ? "active" : ""}`}
                            href="/"
                            onClick={()=> handleLinkClick("/")}
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
                                Books
                        </a>
                    </li>

                    <li>
                        <a className={`nav-link ${activeLink === "#footer" ? "active" : ""}`}
                             href="#footer"
                            onClick={() => handleLinkClick("#footer")}
                            >
                                Reach Out
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
                        <a 
                            target="_blank"
                            href="https://www.facebook.com/oduko.williams?mibextid=LQQJ4d">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </li>

                    <li>
                        <a 
                            target="_blank"
                            href="https://x.com/odukoositadimma?s=11">
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