import React from 'react';
import "./sc.css";
import "./data";
import { Button } from 'reactstrap';

const FrameWorkCard = (props) => {
    return (
        props.data.map(d =>
            <div className="small_card" key={d.id}>
                <div className="user_data">
                    <p className="top_text">{d.name}</p>
                    <div className="btn">
                        <a href={d.website} target="_blank" rel="noopener noreferrer">
                            <Button outline color="primary" >Try it out</Button>
                        </a>
                    </div>
                </div>
                <div className="card_info">
                    <div>
                        <img className="img" src={d.pic} alt="sc_img" />
                    </div>
                    <div className="btm_text">
                        <p>{d.desc}</p>
                    </div>
                </div>
            </div>)
    )
}

export default FrameWorkCard;