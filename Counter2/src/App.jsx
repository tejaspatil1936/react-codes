import { useState } from "react";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);
  // let Counter = 0;
  const Increase = () => {
    setCounter(++Counter);
  }

  const Decrease = () => {
    setCounter(-- Counter);
  }
  return (
    <>
      <h1>tejas</h1>
      <button>counter : {Counter} </button>
      <br />
      <br />
      <button onClick={Increase}>Increase</button>
      <br />
      <button onClick={Decrease}>Decrease</button>
    </>
  );
}

export default App;
