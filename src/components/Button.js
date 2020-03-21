import React from 'react';

function Button (props) {
    const { value, handleClick, styles} = props;
    return (
        <button onClick={handleClick} className={`button ${styles}`}>
            {value}
        </button>
    )
}



export default Button;