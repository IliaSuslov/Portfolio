import React from 'react'
import './skills.css';
import '../../App.css';

const SkillsList = () => {
    const dskills = [
        { id: "1", skill: "Sketch/Figma/Zeplin" },
        { id: "2", skill: "Bootstrap 4" },
        { id: "3", skill: "Material Design Kits" },
        { id: "4", skill: "Ionic" },
    ]
    const devskills = [
        { id: "1", skill: "HTML" },
        { id: "2", skill: "CSS/SCSS" },
        { id: "3", skill: "JavaScript" },
        { id: "4", skill: "ReactJS" },
        { id: "5", skill: "React Native" },
    ]
    const statemanagers = [
        { id: "1", skill: "Redux" },
        { id: "2", skill: "Storeon" },
    ]
    const desList = dskills.map((skill) =>
        <div key={skill.id}>
            <p className="skilltext">{skill.skill}</p>
        </div>
    );
    const devList = devskills.map((skill) =>
        <div key={skill.id}>
            <p className="skilltext">{skill.skill}</p>
        </div>
    );
    const stateList = statemanagers.map((skill) =>
        <div key={skill.id}>
            <p className="skilltext">{skill.skill}</p>
        </div>
    );

    return (
        <div className="item">
            <div className="item_left">
                <h3 className="s_header">Design</h3>
                {desList}
            </div>
            <div className="item_center">
                <h3 className="s_header">Front-End</h3>
                {devList}
            </div>
            <div className="item_right">
                <h3 className="sm_header">State Manage</h3>
                {stateList}
            </div>
        </div>
    )
}

export default SkillsList