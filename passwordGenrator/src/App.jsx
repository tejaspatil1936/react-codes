import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-800 h-64 p-1 m-10 rounded-lg">
        <p className="pt-5 text-4xl text-orange-500 mb-5 ">Password genrator</p>
        <div className="flex items-center relative ">
          <input type="text" className="w-full h-10 p-2 rounded-xl m-2" />
          <button className="absolute right-0 top-0 w-24 h-10 bg-blue-700 text-white rounded-r-xl m-2">
            Copy
          </button>
        </div>
        <div className="">
          <input type="range" className="m-9 w-36 " min={6} max={100} />
          <input type="checkbox" name="Numbers" className="size-4" />
          <label htmlFor="Numbers" className="p-2 text-2xl text-orange-500">
            Numbers
          </label>{" "}
          <input type="checkbox" name="Symbols" className="size-4 ml-5" />
          <label htmlFor="Symbols" className="p-2 text-2xl text-orange-500">
            Symbols
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
