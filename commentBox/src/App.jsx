import React from "react";
import Comment from "./components/Comment";
import ThoughtBox from "./components/ThoughtBox";

function App() {
  return (
    <div className="h-full-min w-full bg-slate-950  flex justify-center items-center">
      <div className="min-h-screen flex flex-col space-y-4 p-3 items-center overflow-y-auto w-full overflow-hidden">
        <Comment />
        <Comment />
        <ThoughtBox />
      </div>
    </div>
  );
}

export default App;
