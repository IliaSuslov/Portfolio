import React from 'react'
import { Button } from 'reactstrap';
import "./contact.css"
import "../../App.css"

const Contact = () => {

    const handleClick = () => {
        let email = "isuslov@me.com";
        window.location.href = `mailto:${email}`;
    }

    return (
        <div>
            <h1 id="contact" className="heading">Contact Me</h1>
            <div className="item">
                <Button color="success" onClick={handleClick}>Email Me</Button>
                <p>Skype: live:isuslov_1</p>
            </div>
        </div>
    )
}

export default Contact