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
            <div className="contact_button">
                <Button color="success" size="lg" block onClick={handleClick} >SEND AN EMAIL</Button>
            </div>
        </div>
    )
}

export default Contact