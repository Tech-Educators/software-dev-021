//this component will show content dynamically
//we will have access to the params value, so we can update it with the actual username
// http://localhost:5173/profile/:username

import { Outlet, useParams } from "react-router";

export default function UserProfile() {
  //we are destructuring a variable to store the value of our params
  const { username } = useParams();
  return (
    <>
      <h1>User profile: {username}</h1>
      {/* eventually, we will select the data from the table that matches the value of params to be rendered in here */}
      <Outlet />
    </>
  );
}
