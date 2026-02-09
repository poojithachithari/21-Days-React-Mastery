// This components lets you login
import React, { useState } from "react";
import LogoutPage from "./LogoutPage";

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedin,setIsLoggedin] = useState(false);


  function handleClick(name){
    if(name==='' || password===''){
        alert("Enter both fields")
        return; 
    }
    setIsLoggedin(true)
 }

  if (isLoggedin){
    return <LogoutPage name={name}/>;
  }
  return (
    <div>
      <h1 className="welcome">Welcome To our App</h1>
      <h3 className="info-text">Please Login to Continue</h3>
      <div className="username">
        <label htmlFor="name">Username:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="password">
        <label htmlFor="password">PassWord: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <button className="login-btn" type="button" onClick={handleClick}>
        Login
      </button>

      <br />
      <br />
      <div className="announcements">
        <h3>📢 Public Announcements:</h3>
        <ul className="announce-list">
          <li>Feature 1 available </li>
          <li>New updates coming soon</li>
        </ul>
      </div>
    </div>
  );
};

export default LoginPage;
