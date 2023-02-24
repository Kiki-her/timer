import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from "./Timer";

function App() {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 600);
  return (
    <div className="App">
      <header className="App-header">
        <Timer expiryTimestamp={time as unknown as number} />
      </header>
    </div>
  );
}

export default App;
