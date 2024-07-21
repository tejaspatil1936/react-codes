import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import Login from "./Login";

function Profile() {
  const { User } = useContext(UserContext);
  if (!User) return <div>please login</div>
  else return <div>Welcome {User.username}</div>;


}

export default Profile;
