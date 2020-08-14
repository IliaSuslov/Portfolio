import React from 'react'
import './skills.css';
import '../../App.css';
import SkillList from "./skills"
const Skills = () => {

    return (
        <div className="section">
            <div className="content">
                <h1 id="skills" className="heading">My Skills</h1>
                <div className="card_container">
                    <SkillList />
                </div>
            </div>
        </div>
    )
}

export default Skills