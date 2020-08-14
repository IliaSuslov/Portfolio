import React, { useState } from 'react'
import { Navbar, Nav, NavLink, Collapse, NavbarToggler, NavItem } from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" fixed="top">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#about">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#skills">Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#works">Works</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Navigation;