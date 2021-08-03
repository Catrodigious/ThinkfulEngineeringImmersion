import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  const { userId } = useParams();
  
  const { url } = useRouteMatch();

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
              <Link to={`${url}`}>Profile</Link>
              </NavLink>
            </li>
            <li>
              <NavLink to={`#`} data-testid="user-posts">
                <Link to={`${url}/posts`}>Posts</Link>
              </NavLink>
            </li>
          </ul>
          <UserProfile user={user} />
        </div>
        <Switch>
          <Route path={`${url}/posts`}>
            <UserPosts posts={user.posts} />
          </Route>
          <Route>
            <UserProfile user={user} />
          </Route>
        </Switch>
      </section>
    );
  }
  return <p>User not found!</p>;
};

export default User;
