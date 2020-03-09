import React, { useState, useEffect }  from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `You clicked ${count} times.`;
    })
    return (
        <div>
            <h1>Use Effect</h1>
            <h1>{count}</h1>

            <button onClick={()=>setCount(count + 1)}> Increment </button>
        </div>
    )
}

export default UseEffect;