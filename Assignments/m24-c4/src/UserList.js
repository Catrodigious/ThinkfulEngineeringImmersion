import React, {useEffect} from "react";

function UserList({ users, setCurrentUser, setUsers, setAlbums, albums }) {
  setUsers([]);
  // Load users from https://jsonplaceholder.typicode.com/users
  useEffect(()=>{
    async function getUsers(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const apiUsers = await response.json();

      setUsers(apiUsers);

    }
    getUsers();
  }, [users]);


  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <button type="button" onClick={() => {
            setCurrentUser(user);
          }}>
            {user.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
