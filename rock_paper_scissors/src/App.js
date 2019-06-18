import React from 'react';
import './App.css';
import PVC from './components/PlayerVsComputer'

const initialState = {
  wins: 0,
  losses: 0,
  draws: 0,
  result: null
}


function App() {
  return (
    <div className="App">
     <h1>Rock Paper Scissors</h1>
     <PVC/>
    </div>
  );
}

export default App;
