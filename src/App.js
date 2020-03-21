import React from 'react';
// import TodoApp from './TodoApp/TodoApp';
// import UsingHooks from './UsingHooks/UsingHooks';
// import UsePrevState from './UsePrevState/UsePrevState';
// import UseEffect from './UseEffect/index';
// import UseStateWithObj from './UseStateWithObj/index';
// import UseStateWithArray from './UseStateWithArray/UseStateWithArray';
import ConditionalEffect from './ConditionalEffect';
import ScoreBoard from './components/ScoreBoard';
import Button from './components/Button';
import Result from './Layout/Result';
import './App.css';

function App() {
  const handleClick =()=> {
    console.log('Clicked')
  }
  return (
    <div className="App">
      {/* <TodoApp /> */}
      {/* <UsingHooks /> */}
      {/* <UsePrevState /> */}
      {/* <UseEffect /> */}
      {/* <UseStateWithObj /> */}
      {/* <UseStateWithArray /> */}
      <ConditionalEffect />
      
      <ScoreBoard P1Name="Sushil" P2Name="Ramesh" P1Score={2} P2Score={1} />
      <Button value="RESET" handleClick={handleClick} styles="reset" />
      <Button value="UNDO" handleClick={handleClick} styles="undo" />
      <Button value="NEW GAME" handleClick={handleClick} styles="newGame" />
      <Result />
    </div>
  )
}

export default App;