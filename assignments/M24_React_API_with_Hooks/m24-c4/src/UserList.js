import React, {useEffect} from "react";

function UserList({ users, setCurrentUser, setUsers }) {

  return (
    <div>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <button type="button" onClick={() => setCurrentUser(user)}>
              {user.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
