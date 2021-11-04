import './App.css';
import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(0)
  
    function decre() {
      setCount(prevCount => prevCount - 1)
    }
    function incre() {
      setCount(prevCount => prevCount + 1)
    }
  
  return (
    <div className="App">
      <h1>Counter</h1>
      <button className="btn" onClick={decre}>-</button>
     <h1>{count}</h1>
     <button className="btn"  onClick={incre}>+</button>
    </div>
  );
}

export default App;
