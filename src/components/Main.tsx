import React from "react"
import AudioList from "./AudioList"
import Listings from "./Listings"

function Main() {
    return (
        <div>
            <div className="hero">
                <h1>
                    <div className="welcome">Welcome To</div> Maazi Oduko Ositadimma's Lib</h1>

                <div>
                    <button className="btn"> 
                        <a href="#"></a>
                        Books</button>
                </div>

            </div>

            <div>
            <h2>Learn To Read These Igbo Books</h2>
                <Listings />
            </div>


            {/* <div>
                <AudioList />
            </div> */}


        </div>


    )
}

export default Main