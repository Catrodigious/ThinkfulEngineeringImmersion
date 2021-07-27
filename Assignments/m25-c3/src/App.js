import React from "react";
import { Link, Route, Router, Switch} from "react-router-dom";
import UserProfile from "./UserProfile";

function NewUser(){
  return <h3>Unable to create a new user</h3>
}

function App() {
  return (
    // No need to add <Router>, it has been added to ./index.js

    <div className="App">
     <h1>404 Not Found</h1>
      <Link to="/user/new">New User</Link>
      {Array(10)
        .fill()
        .map((ignoredValue, index) => index + 1)
        .map((id) => (
          <div key={id}>
            <Link to={`/user/${id}`} data-testid={`user-${id}`}>
              User{id}
            </Link>
          </div>
        ))}

    <Switch>
      <Route path="/user/new">
        <NewUser />
      </Route>
      <Route path="/user/:userId">
          <UserProfile />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
