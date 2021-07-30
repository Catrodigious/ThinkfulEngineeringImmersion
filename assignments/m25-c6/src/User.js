import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();


  if (!userId) {
    throw new Error("No URL parameter for userId");
  }

  const user = users.find((user) => `${user.id}` === userId);

  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`#`} data-testid="user-profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={`#`} data-testid="user-posts">
                Posts
              </NavLink>
            </li>
          </ul>
          <UserProfile user={user} />
        </div>
        <Switch>
          <Route path="/profile"></Route>
          <Route path="/user-posts/:id">
            <UserPosts posts={user.posts} />
          </Route>
        </Switch>
      </section>
    );
  }
  return <p>User not found!</p>;
};

export default User;
