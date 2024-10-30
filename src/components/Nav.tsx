import React from "react"
import { NavLink } from "react-router-dom"

function Nav(){
    return(
        <div className="nav">
            <ul>
                <li> <NavLink className="nav-link" to="/home">Home</NavLink> </li>
                <li> <NavLink className="nav-link" to="#">About</NavLink> </li>
                <li> <NavLink className="nav-link" to="/books">books</NavLink> </li>
                <li> <NavLink className="nav-link" to="#">blogs</NavLink> </li>

            </ul>

        </div>
    )
}

export default Nav