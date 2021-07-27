import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

/*
  Build an app where the user can make text and image posts. This will resemble tumblr or twitter, but with a single user.

  A user can type in the text of a text post. For an image post, they should put the URL of an image.

  The user should be able to add a new post, edit a post, and delete a post.
*/

function App() {
  const [posts, setPosts] = useState([]);
  const [toDelete, markToDelete] = useState({});

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  return (
    <div className="App">
      <PostCreate posts={posts} setPosts={setPosts} />
      <PostList posts={posts} setPosts={setPosts} toDelete={toDelete} />
    </div>
  );
}

export default App;
