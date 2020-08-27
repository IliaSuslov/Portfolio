import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./nav.css";

const DesktopNB = () => {
    return (
        <header className="Header">
            <nav className="Nav">
                <AnchorLink href="#home">Home</AnchorLink>
                <AnchorLink href="#about">About Me</AnchorLink>
                <AnchorLink href="#skills">Skills</AnchorLink>
                <AnchorLink href="#works">Works</AnchorLink>
            </nav>
        </header>
    )
}
export default DesktopNB;

