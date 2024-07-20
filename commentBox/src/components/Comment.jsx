import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Icon } from "@iconify/react";
  
function Comment() {
  const [votes, setVotes] = useState('00')
  return (
    <div className="bg-slate-900 h-fit w-1/2 rounded-lg flex overflow-x-hidden">
      <div className="bg-slate-700 h-2/5 w-9 ml-2 mt-2 py-1 rounded-md flex flex-col justify-center border-black">
        <button className=" rounded-t-md text-white">+</button>m  
        <div className="flex justify-center text-white ">00</div>
        <button className="rounded-b-md text-white">-</button>
      </div>
      <div className="flex w-full  flex-col h-full">
        <div className="flex justify-between ">
          <div className="flex pb-1.5"> 
            <div className="bg-slate-700 h-full w-36 ml-1.5 mt-2.5 flex rounded-md">
              <div className="h-fit w-9 mt-2 ml-2  rounded-full">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1720310400&semt=sph"
                  alt="profile pic"
                  className="rounded-full"
                />
              </div> 
              <div className="text-white mt-3 ml-2">Tejas Patil</div>
            </div>
            <div className="mt-6 ml-2 text-sm text-slate-400">2 months ago</div>
          </div>
          <div>
            <div className="h-10 w-20 mt-2.5 mr-3 flex bg-slate-800 cursor-pointer">
              <Icon icon="carbon:reply" color="white" className="mt-3 ml-2 " />
              <div className="ml-1 mt-2.5 text-slate-400"> Reply</div>\ 
            </div> 
          </div>
        </div>
        <div className="h-full my-3 mr-3 ml-1.5 ">
          <div className="bg-slate-700 h-full  rounded-lg p-1 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            iusto id harum! Corporis beatae aut voluptates praesentium,
            voluptate magnam pariatur! Repudiandae provident exercitationem nemo
            natus quia dolorem sapiente sequi perferendis.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident iusto id harum!
            Corporis beatae aut voluptates praesentium, voluptate magnam
            pariatur! Repudiandae provident exercitationem nemo natus quia
            dolorem sapiente sequi perferendis.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comment;
