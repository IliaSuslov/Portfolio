import React from "react";
import '../../App.css';
import FrameWorkCard from "./framework_cards"
const FrameWorks = () => {

    const data = [
        {
            id: "1", pic: require("./images/react.jpeg"), website: "https://reactjs.org/", name: "React",
            desc: "React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.React can be used as a base in the development of single- page or mobile applications.",
        },
        {
            id: "2", pic: require("./images/ang.png"), website: "https://angular.io/", name: "Angular",
            desc: "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS."
        },
        {
            id: "3", pic: require("./images/vue.jpeg"), website: "https://vuejs.org/", name: "Vue",
            desc: "Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru."
        }
    ];

    return (
        <div className="frameworks">
            <h1>Framework cards</h1>
            <FrameWorkCard data={data} />
        </div>
    )

}

export default FrameWorks;
