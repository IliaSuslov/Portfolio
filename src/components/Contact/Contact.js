import React from 'react'
import { Button } from 'reactstrap';
import "./contact.css"
import "../../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const handleClick = () => {
        let email = "isuslov@me.com";
        window.location.href = `mailto:${email}`;
    }

    return (
        <div>
            <div className="contact_button">
                <Button color="success" size="lg" onClick={handleClick} >
                    <FontAwesomeIcon icon={faEnvelope} />
                </Button>
            </div>
        </div>
    )
}

export default Contact