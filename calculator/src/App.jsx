import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="calcultor">
          <input type="text" id="inputbox" placeholder="0" />
          <div>
            <button className="buttons operators">AC</button>
            <button className="buttons operators">DEL</button>
            <button className="buttons operators">%</button>
            <button className="buttons operators">/</button>
          </div>
          <div>
            <button className="buttons">9</button>
            <button className="buttons">8</button>
            <button className="buttons">7</button>
            <button className="buttons operators">*</button>
          </div>
          <div>
            <button className="buttons">6</button>
            <button className="buttons">5</button>
            <button className="buttons">4</button>
            <button className="buttons operators">+</button>
          </div>
          <div>
            <button className="buttons">3</button>
            <button className="buttons">2</button>
            <button className="buttons">1</button>
            <button className="buttons operators">-</button>
          </div>
          <div>
            <button className="buttons">0</button>
            <button className="buttons">00</button>
            <button className="buttons">.</button>
            <button className="buttons operators">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
