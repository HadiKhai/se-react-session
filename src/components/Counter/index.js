import React, { useState } from 'react';
import './styles.css';

const positions = ["start","center","end"]

const Counter = ({text,step,count="No value Assigned", setCount}) => {
    const [inverter,setInverter] = useState(false);
    const [position,setPosition] = useState(1);

    const handleClick = () => {
        setPosition((position + 1) % position.length);
    }

    return (
        <div className={"counterContainer"} style={{placeContent:positions[position]}}>
            <div className={"counter"}>
                <h3 onClick={handleClick} style={{color: inverter ? "red":'blue'}}>
                    {text}
                </h3>
                <div>
                    <button onClick={() => setCount(inverter ? count - step : count + step)}>Increment</button>
                </div>
                <div>
                    <button onClick={() => setCount(inverter ? count + step : count - step)}>Decrement</button>
                </div>
                <button onClick={() => setInverter(!inverter)}>Invert Functionality</button>
            </div>
        </div>
    );

};

export default Counter;