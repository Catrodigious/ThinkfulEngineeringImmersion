import React, { useState, useEffect } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  /*
  useEffect(()=>{
    async function getUsers(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersAPI = await response.json();
      setUsers(usersAPI);
    }
    try{
      getUsers();
    }catch(err){
      console.log(err);
    }
    return ()=> abortController.abort();
  }, []);
  */

  useEffect(() => {
    const abortController = new AbortController();

    async function loadUsers() {
      setUsers([]);
      try{
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users", {signal: abortController.signal});
        const userFromAPI = await response.json();
        
        setUsers(userFromAPI);
      }catch(error){
        if (error.name === "AbortError"){
          console.log("Aborted: ", users);
        }else{
          console.log(error);
        }
      }
    }
    loadUsers();
    return () => abortController.abort();
  }, []);


  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}

  return (
    <div className="App">
      <title>Awesome Album App</title>
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} setUsers={setUsers} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}

export default App;
