import {Link} from "react-router-dom";
import "./Navbar.css";
import React from "react";

export const Navbar = () => {
    return (
        <div id="nav1">
            <img src="https://accounts.coschedule.com/img/cos-logo-horz.svg" />
            <Link class="nav link1" to="/products">Products</Link>
            <Link class="nav link2" to="/whycoschedule">Why Coshedule</Link>
            <Link class="nav link3" to="/resources">Resources</Link>
            <Link class="nav link4" to="/pricing">Pricing</Link>
            <Link class="nav link5" to="/signin">Signin</Link>
            <Link class="nav link6" to="/getstartedfee">Get Started Fee</Link>
            <Link class="nav link7" to="/getademo"><button>Get A demo</button></Link>  
            <Link class="nav link6" to="/"></Link>
        </div>
    )
}