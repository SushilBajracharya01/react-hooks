import React from 'react';

function Banner (props) {
    const { message, winner } = props;
    return (
        <div className="banner">
            <div className="message">
                {message} {winner}
            </div>
        </div>
    )
}

export default Banner;