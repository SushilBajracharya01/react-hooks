import React, { useState } from 'react';
import '../UsingHooks/counter.css';

function UsePrevState() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    function decrementCount() {
        setCount(prevCount => prevCount -1);    
    }

    function clearCount() {
        setCount(0);
    }
    return (
        <div className="counter">
            <h1>Counter</h1>
            <div className="count">{count}</div>
            <div className="btnContainer">
                <input type="button" className="btn" value="+" onClick={incrementCount} />
                <input type="button" className="btn" value="-" onClick={decrementCount} />
                <input type="button" className="btn" value="clear" onClick={clearCount} />
            </div>
        </div>
    )
}

export default UsePrevState;