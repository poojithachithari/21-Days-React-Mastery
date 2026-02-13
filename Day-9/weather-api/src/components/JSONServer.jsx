//This is a practice component for using API and Json Server

import React, { useEffect, useState } from "react";

function JSONServer() {
  const [userData, setuserData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    getUserData();
  }, []);
  const getUserData = async() => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setuserData(response);
    setLoading(false)
  };
  return (
    <div>
      <h1>Data</h1>
      {
        !loading?
        userData.map((user)=>(
            <ul key={user.name}>
                <li>{user.name}</li>
                <li>{user.age}</li>
                <li>{user.email}</li>
            </ul>
        )):<h1>Data Loading...</h1>
    }
    </div>
  );
}

export default JSONServer;
