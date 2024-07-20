import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCount] = useState(0);
  const add = () => {
    setCount((counter += 1));
    console.log(counter);
  };
  const decrease = () => {
    setCount((counter -= 1));
    console.log(counter);
  };
  return (
    <>
      <h1> increment and decrement counter </h1>
      <h1>Counter : {counter} </h1>
      <button onClick={add}>
        <h2>increase</h2>
      </button>
      <br /><br />
      <button onClick={decrease}>
        <h2>decrease</h2>
      </button>
    </>
  );
}

export default App;
