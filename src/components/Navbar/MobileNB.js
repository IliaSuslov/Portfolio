import React, { useState } from 'react'
import "./nav.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const MobileNB = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <Navbar color="faded" light fixed="top" className="mobile_nav">
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="nav_link">
                            <NavLink href="#home" className="nav_link" onClick={toggleNavbar}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about" className="nav_link" onClick={toggleNavbar}>About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#skills" className="nav_link" onClick={toggleNavbar}>Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#works" className="nav_link" onClick={toggleNavbar}>Works</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact" className="nav_link" onClick={toggleNavbar}>Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default MobileNB