import React from 'react'
import { Button } from 'reactstrap';
import { Card } from 'react-bootstrap'
import mt from "./img/mt1.jpg"
import "./works.css"

const works = [
    { id: "1", title: "Monitoring-transporta", work: "Landing Website (Desktop ver. only)", img: mt, addr: "http://monitoring-transporta.online", status: "disabled", perm: "Private" },
    // { id: "2", title: "Social Web", work: "Social Web for React devs", img: mt, addr: "", github: "", status: "primary", perm: "Github" },
    { id: "3", title: "Gym APP", work: "University Team project (React Native)", addr: "https://www.figma.com/file/KsjtoVos5CUMnOvzqE8nzJUH/Gym-App", github: "https://github.com/IliaSuslov/gymapp", status: "primary", perm: "Github" },
    { id: "4", title: "Small Projects", work: "Small Projects for practice", addr: "/sprojects", status: "primary", perm: "Github" },
]

const WorkList = works.map((works) => (
    <div key={works.id} className="works_item">
        <Card>
            <Card.Img variant="top" src={works.img} />
            <Card.Body>
                <Card.Title>{works.title}</Card.Title>
                <Card.Text>
                    {works.work}
                </Card.Text>
                <Button
                    href={works.addr}
                    color="success"
                    target="_blank"
                    rel="noopener noreferrer"
                >Watch</Button>
                <Button
                    href={works.github}
                    color={works.status}
                    target="_blank"
                    rel="noopener noreferrer"
                >{works.perm}</Button>
            </Card.Body>
        </Card>
    </div>
))

const Work = () => {
    return (
        <div>
            {WorkList}
        </div>
    )
}
export default Work
