import React, { useState } from "react"

function Media(){

    // const [activeLink, setActiveLink] = useState<string>("/")

    return (
        <div>
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

                    <a href="">
                    <i className="fab fa-linkedin"></i> 
                    </a>
                </li>
            </ul>
            
        </div>
    )
}

export default Media