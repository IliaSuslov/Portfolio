import React, { useState } from 'react'
import ResultPad from './components/resultpad/resultpad'
import Buttons from './components/buttons/buttons'

import "./calc.css";
const Calc = () => {
    const [state, setState] = useState({
        result: ""
    })

    let calculate = () => {
        try {
            setState({
                result: (eval(state.result) || "") + ""
            })
        }
        catch (e) {
            setState({
                result: "error"
            })
        }
    }
    let reset = () => {
        setState({
            result: ""
        })
    }
    let backspace = () => {
        setState({
            result: state.result.slice(0, -1)
        })
    }

    let onClick = (button) => {
        (button === "=") ? calculate() :
            (button === "C") ? reset() :
                (button === "CE") ? backspace() : (state.result !== undefined) ? setState({ result: state.result + button }) : setState({ result: button })
    }

    return (
        <div>
            <h1>Calculator</h1>
            <div className="calc_body">
                <ResultPad result={state.result} />
                <Buttons onClick={onClick} />
            </div>
        </div>
    )
}

export default Calc
