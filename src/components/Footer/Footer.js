import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './footer.css';

library.add(fab)

const Footer = () => {
    return (
        <div className="icon_bar">
            <a href='https://github.com/IliaSuslov' target="_blank" rel="noopener noreferrer" className="logo">
                <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href='https://vk.com/iscripti' target="_blank" rel="noopener noreferrer" className="logo">
                <FontAwesomeIcon icon={['fab', 'vk']} />
            </a>
            <a href='https://www.linkedin.com/in/ilia-suslov/' target="_blank" rel="noopener noreferrer" className="logo">
                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </a>
        </div>
    )
}

export default Footer