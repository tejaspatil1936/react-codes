import React from "react";
function addComment(){

}
function ThoughtBox() {
  return (
    <div className="w-screen flex justify-center">
      <div className="bg-slate-900 h-20 w-2/5 flex rounded-lg">
        <div className="w-full flex justify-between">
          <div className="h-16 w-16 mt-2 ml-2 pt-1">
            <img
              className="h-14 w-16 rounded-full"
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
            />
          </div>
          <input
            type="text"
            className="bg-slate-700 h-16 w-full mt-2 pl-2 overflow-x-hidden rounded-lg ml-2 text-white"
          />
          <button className="w-20 flex justify-center mt-2 text-lg bg-blue-700 h-min rounded-md m-1.5 cursor-pointer"
          onClick={addComment()}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
export default ThoughtBox;
  