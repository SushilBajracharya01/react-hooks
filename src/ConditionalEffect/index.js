import React, { useState, useEffect } from 'react';

const ConditionalEffect = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('effect used')
        document.title=`${count} times`;
    });
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <div>You Clicked {count} times.</div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}

export default ConditionalEffect;