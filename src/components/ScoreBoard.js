import React from 'react';


function ScoreBoard(props) {
    const { P1Name, P2Name, P1Score, P2Score } =props;
    return (
        <div className="scoreBoard">
            <div className="P1Div">
                <div className="headDiv">
                    <span className="playerName">{P1Name}</span><b>X</b>
                </div>
                <div className="bodyDiv">
                    <div style={{color: 'white', userSelect: 'none'}}>{P1Name}</div>
                    <span className="playerScore"><b>{P1Score}</b></span>
                </div>
            </div>
            <div className="P2Div">
                <div className="headDiv">
                    <b>O</b><span className="playerName">{P2Name}</span>
                </div>
                <div className="bodyDiv">
                    <div className="playerScore"><b>{P2Score}</b></div>
                    <div style={{color: 'white', userSelect: 'none'}}>{P2Name}</div>
                </div>
            </div>
        </div>
    )
}

export default ScoreBoard;