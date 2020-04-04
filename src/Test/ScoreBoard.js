import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Count = styled.button`
  border: 10px solid brown;
  background: black;
  color: white;
  width: 100px;
  height: 100px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  user-select: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const grow = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(3);
    }
`;
const GrowingDiv = styled.div`
  border: 10px solid brown;
  background: black;
  color: white;
  width: 100px;
  height: 100px;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  user-select: none;
  pointer: cursor;
  transition: width 600ms ease-in, height 600ms ease-in, background 600ms ease-out, border 600ms ease-out;
//   animation: ${grow} 2s ease-in infinite;
:hover{
    width: 120px;
    height: 120px;
    background: brown;
    border-color: black;
}
`;

function ScoreBoard() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <Container>
        <Count onClick={() => setCount1((prevCount1) => prevCount1 + 1)}>
          {count1}
        </Count>
        <Count onClick={() => setCount2((prevCount2) => prevCount2 + 1)}>
          {count2}
        </Count>
      </Container>
      <GrowingDiv>yes</GrowingDiv>
    </div>
  );
}

export default ScoreBoard;
