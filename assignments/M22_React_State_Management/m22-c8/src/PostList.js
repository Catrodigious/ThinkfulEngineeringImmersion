import React from "react";

/**
 * Diplays a list of either text or image posts.
 *
 */

/*
  in post create, get the type and the content
 */
function PostList(props) {
  // TODO: Diplay the list of posts.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each post must have className="post" for the tests to work.
  // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return <div className="post-list">
    {props.posts}
  </div>;
}

export default PostList;
