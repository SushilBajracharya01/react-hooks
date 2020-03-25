import React, { useState, useEffect } from 'react';


function MousePosition() {
    const [mousePos, setMousePos] = useState({x:0, y:0});

    const logMousePosition = (e) => {
        setMousePos({x: e.clientX, y: e.clientY})
    }

    useEffect(()=>{
        window.addEventListener('mousemove', logMousePosition);

        return ()=>{
            console.log('Component will unmount');
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[]);

    return (
        <div>

            <h1>MousePosition</h1>
            x: {mousePos.x}
            <br/>
            y: {mousePos.y}
        </div>
    )
}

export default MousePosition;