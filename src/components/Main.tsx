import React from "react"
import AudioList from "./AudioList"
import Listings from "./Listings"
import { NavLink } from "react-router-dom"

function Main() {
    return (
        <div>
            <div className="hero">
                <h1>
                    <div className="welcome">Welcome To</div> <span className="hero-name">maàzị̄ Ọdụkọ Ositadịmma's Lib </span> </h1>

                <div>
                    <NavLink to="/books">
                       <button className="btn"> Books</button>
                    </NavLink>
                    
                </div>

            </div>

            <div>
                {/* <h2>Learn To Read These Igbo Books</h2>
                <Listings /> */}
            </div>


            {/* <div>
                <AudioList />
            </div> */}


        </div>


    )
}

export default Main