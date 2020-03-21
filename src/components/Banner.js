import React from 'react';

function Banner (props) {
    const { message, winner } = props;
    return (
        <div className="banner">
            <marqueee>dfsdlfsdflsdfs</marqueee>
            <div className="message">
                {message} {winner}
            </div>
        </div>
    )
}

export default Banner;