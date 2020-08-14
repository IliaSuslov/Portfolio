import React from 'react'
import "./respad.css"

const ResultPad = (props) => {
    return (
        <div className="result">
            <p>{props.result}</p>
        </div>
    )
}

export default ResultPad