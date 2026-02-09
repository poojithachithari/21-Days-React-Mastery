// you are logged in this components lets you logout
import React, { useState } from "react";
import LoginPage from "./LoginPage";


const LogoutPage = (props) => {
    const[isLogout,setIsLogout] = useState(false);
    function handleClick(){
        setIsLogout(true)
        return; 
    }
    if (isLogout){
           return <LoginPage/>
        }
  return (
    <div>
      <h1 className="welcome">Welcome Back {props.name}!</h1>
      <button className="logout-btn" type="button" onClick={handleClick}>Logout</button>

      <div className="dashboard">
        <h2 className="title">🎯 YOUR DASHBOARD </h2>
        <h3 className="profile"> Profile Information</h3>
        <ul className="profile-info">
          <li>Name: {props.name}</li>
          <li>Email: {props.name}@email.com</li>
          <li>Member since: 2024</li>
        </ul>
      </div>
      <div className="stats">
        <ul className="stats-info">
          <li> Tasks Completed: 24</li>
          <li>Projects: 5</li>
          <li>Points: 1,250</li>
        </ul>
      </div>

      <h4 className="private-content">🔒 This content is only visible to logged-in users! </h4>
    </div>
  );
};

export default LogoutPage;
