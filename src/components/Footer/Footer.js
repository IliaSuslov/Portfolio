import React from 'react'
import { Nav, Form, } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css';

library.add(fab)

const Footer = () => {
    return (
        <footer className="footer">
            <div className="f_item">
                <Form inline>
                    <Nav.Link a href='https://github.com/IliaSuslov' style={{ display: "table-cell" }} target="_blank">
                        <div className="logo"><FontAwesomeIcon icon={['fab', 'github-square']} /></div>
                    </Nav.Link>
                    <Nav.Link a href='https://vk.com/iscripti' style={{ display: "table-cell" }} target="_blank">
                        <div className="logo"><FontAwesomeIcon icon={['fab', 'vk']} /></div>
                    </Nav.Link>
                    <Nav.Link a href='https://www.linkedin.com/in/ilia-suslov/' style={{ display: "table-cell" }} target="_blank">
                        <div className="logo"><FontAwesomeIcon icon={['fab', 'linkedin']} /></div>
                    </Nav.Link>
                </Form>
            </div>
        </footer>
    )
}

export default Footer