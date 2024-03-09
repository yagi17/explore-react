// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Counter from "./counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        Third clicked{" "}
      </button>
      {/* vejaillah */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
