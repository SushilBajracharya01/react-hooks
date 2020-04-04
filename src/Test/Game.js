import React from 'react';
import styled from 'styled-components';

import ScoreBoard from './ScoreBoard';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
function Game() {
  const setScoreCount = () => {};
  return (
    <div>
      <ScoreBoard />
      <Button onClick={setScoreCount}>Click</Button>
    </div>
  );
}

export default Game;
