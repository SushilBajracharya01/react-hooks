import React, { useState } from 'react';
import MousePosition from './MousePosition';

function ToggleMousePosition() {
    const [toggleMousePosComp, setToggleMousePosComp] = useState(true);
    return(
        <div>
            <button onClick={()=>setToggleMousePosComp((prevToggleMousePosComp)=>!prevToggleMousePosComp)}>Display Mouse Position</button>
            {
                toggleMousePosComp
                &&
                <MousePosition />
            }
        </div>
    )
}

export default ToggleMousePosition;