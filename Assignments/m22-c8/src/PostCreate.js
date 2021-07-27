import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */

  // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

function PostCreate(props) {
  const [type, setType] = useState("Text");
  let localPosts = [];

  const removePost = (id) => {
    let updatedPosts = [];
    for (let post of localPosts){
      if (post.key !== id){
        updatedPosts.push(post);
      }
    }
    props.setPosts(updatedPosts);
  }

  const handleNewPosts = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const createType = formData.get("type");
    const content = formData.get("content");
    const id = `p${props.posts.length}`;
    const returnForm = {};
  
    const post = ( <fieldset className="post" key={id} id={id}>
        {createType === "Text" ? <p>{content}</p> : <img src={content} alt={id} style={{height: '200px', width: 'auto'}} />}
        <div>
        <button type="button" name="delete" onClick={()=>{removePost(id)}}>Delete</button>
        </div>
      </fieldset> 
    );
    returnForm[id] = post;
    props.setPosts([...props.posts, post]);
    localPosts = [...props.posts, post];
  }

  const setTextBoxType = (evt)=>{
    let contentInput;
    console.log("type: ", type);
    console.log("evt.type: ", );

    if (evt.target.value === "Text" ){
      contentInput = document.createElement('textarea');
      contentInput.setAttribute("name", "content");
      contentInput.setAttribute("required", true);
      contentInput.setAttribute("rows", 3);
      setType(evt.target.value);
    }else{
      contentInput = document.createElement('input');
      contentInput.setAttribute("name", "content");
      contentInput.setAttribute("required", true);
      contentInput.setAttribute("rows", 3);
      contentInput.setAttribute("placeholder", "example.gif");
      setType(evt.target.value);
    }
    const existingInput = document.querySelector(".inputBox");
    const child = existingInput.children[1];
    console.log("child: ", child);
    existingInput.removeChild(child);
    existingInput.appendChild(contentInput);
  }

  return (
    <form name="create" id="create" onSubmit={handleNewPosts}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select id="type" name="type" value={type} required={true} onChange={setTextBoxType}>
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div className="inputBox">
          <label htmlFor="content">Content: </label>
          <textarea name="content" required={true} rows={3} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
