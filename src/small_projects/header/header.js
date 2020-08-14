import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Small Projects</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Collection
              </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Framework Cards
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    API Test
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Calculator
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Ilia Suslov</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;