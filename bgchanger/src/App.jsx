import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState('white');
  return (
    <>
      <div className = 'body' style={{backgroundColor : color}}>
        <div className="bar">
          <button
            className="btn"
            onClick={() => {
              setcolor("red");
            }}
            style={{ color: "black", backgroundColor: "red" }}
          >
            red
          </button>
          <button
            className="btn"
            onClick={() => {
              setcolor("blue");
            }}
            style={{ color: "black", backgroundColor: "blue  " }}
          >
            blue
          </button>
          <button
            className="btn"
            onClick={() => {
              setcolor("olive");
            }}
            style={{ color: "black", backgroundColor: "olive " }}
          >
            olive
          </button>
          <button
            className="btn"
            onClick={() => {
              setcolor("green ");
            }}
            style={{ color: "black", backgroundColor: "green " }}
          >
            green
          </button>
          <button
            className="btn"
            onClick={() => {
              setcolor("yellow");
            }}
            style={{ color: "black", backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            className="btn"
            onClick={() => {
              setcolor("orange");
            }}
            style={{ color: "black", backgroundColor: "orange" }}
          >
            orange
          </button>
          <button
            className="btn"
            onClick={() => {
              setcolor("purple");
            }}
            style={{ color: "black", backgroundColor: "purple" }}
          >
            purple
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
