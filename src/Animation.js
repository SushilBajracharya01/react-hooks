import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';


function Animation() {
    const [showBanner, setBanner] = useState(true);
    return (
        <div>
            <CSSTransition
                in={showBanner}
                timeout={2000}
                classNames="banner"
                // unmountOnExit
            >
                {/* <h1>Hi</h1> */}
                <div className="banner">Hello</div>
            </CSSTransition>
            <div className="toggler">
                <button onClick={()=>setBanner(!showBanner)}>Toggle</button>
            </div>

            {/* <div className="redBox">

            </div> */}
        </div>
    )
}

export default Animation;