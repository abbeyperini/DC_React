import { connect } from "react-redux";
import React, { useState } from 'react';

function FancyCounter(props) {
    const [inputState, setInputState] = useState({});

    const handleOnChange = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: parseInt(e.target.value)
        })
    }

    return (
        <div>
            <label>Enter a number:</label>
            <input onChange={handleOnChange} type="text" name="number" placeholder="0" id="number"></input>
            <button onClick = {() => {props.onFancyCounterAdd(inputState.number)}}>Add</button>
            <button onClick = {() => {props.onFancyCounterSub(inputState.number)}}>Subtract</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFancyCounterAdd: (value) => dispatch({type: "FANCY_COUNTER_ADD", payload: value}),
        onFancyCounterSub: (value) => dispatch({type: "FANCY_COUNTER_SUB", payload: value})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FancyCounter);