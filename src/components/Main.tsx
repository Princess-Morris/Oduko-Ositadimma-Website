import React from "react"
import AudioList from "./AudioList"
import { NavLink } from "react-router-dom"

function Main() {
    return (
        <div>
            <div className="hero">
                <h1>
                    <div className="welcome">Welcome To</div> <span className="hero-name">Maàzị̄ Ọdụkọ Ositadịmma's Lib </span> </h1>

                <div>
                    <NavLink to="/books">
                       <button className="btn"> Books</button>
                    </NavLink>
                    
                </div>

            </div>

        </div>


    )
}

export default Main