import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/tejaspatil1936")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  const data = useLoaderData()
  return <div className="text-center">Github Followers : {data.followers} </div>;
}

export default Github;

export const gitHubInfoLoader = async () => { 
  const response = await fetch("https://api.github.com/users/tejaspatil1936")
  return response.json();
};
