import React from "react"
import { Link } from "react-router-dom"

function Header(){

    return(
        <div className="header-container">
            <a href="#" className="header-logo">DSC</a>
            <nav className="header-navBar">
            <Link to="/" className="link-a">Home</Link>
            <Link to="/search" className="link-b">Search</Link>
            <Link to="signup" className="link-c">Sign Up</Link>
            </nav>
        </div>
    )
}

export default Header