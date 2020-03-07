import React, { useState } from 'react';
import './UsingHooks.css';


function Counter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const decrementCount = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <div className="counter">
            <h1>Counter</h1>
            <div className="count">{count}</div>
            <div className="btnContainer">
                <input type="button" className="btn" value="+" onClick={incrementCount} />
                <input type="button" className="btn" value="-" onClick={decrementCount} />
            </div>

        </div>
    )
}
function UsingHooks() {
    return (
        <div className="App">
            <Counter />
        </div>
    )
}

export default UsingHooks;