import React, { useState, useEffect } from 'react';

function AutoCounter() {
    const [counter, setCounter] = useState(0);

    const tick = ()=>{
        setCounter(counter + 1);
    }
    useEffect(()=>{
        console.log('UseEffect called')
        const interval = setInterval(tick, 1000);
        return ()=>clearInterval(interval);
    },[counter])
    return (
        <div> 
            {counter}
        </div>
    )
}

export default AutoCounter;