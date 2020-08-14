import React from 'react';
import "../../App.css"
import "./about.css"

const About = () => {
    const myRef = React.createRef();
    return (
        <div className="section">
            <h1 id="about" ref={myRef} className="heading">About Me</h1>
            <div className="about_container">
                <div className="about_item">
                    <h3 >Education</h3>
                    Lapland UAS, BBA (Business Information Technology)
                    <h3 >Languages</h3>
                    Russian, English
                    <h3>Motivation</h3>
                    <div className="a_text">
                        I am «Entry Level» ReactJS developer, with BIT education background.
                        Motivated to become a Front-End developer.
                        I really want to try out myself in your project and get some more experience.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About