import React from "react";

// TODO: Change the link below to go back to the home page.

export const PostsNav = () => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/"><a className="btn btn-link">Go Home</a></Link>
      </li>
    </ol>
  </nav>
);

export default PostsNav;
