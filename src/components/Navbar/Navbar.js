import React, { useState } from 'react'
import "./nav.css";

const Navigation = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }

    return (
        <div className="nav" id="myTopnav">
            <a href="#home">Home</a>
            <a href="#about">About Me</a>
            <a href="#skills">Skills</a>
            <a href="#works">Works</a>
            <a href="#contact">Contact Me</a>
            <button href="javascript:void(0);" className="icon" onClick={myFunction}>
                <i className="fa fa-bars"></i>
            </button>
        </div>

    )
}
export default Navigation;