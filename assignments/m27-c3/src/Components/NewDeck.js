import React from "react";
import { useHistory } from "react-router-dom";

// Review React State Management - Forms w/Input Fields
//  https://courses.thinkful.com/zid-fe-react-state-management-v1/checkpoint/6

export const NewDeck = function(){
  const history = useHistory();
  console.log("CreateDeck was called");
  function Nav(){
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-flex">
                    <a className="navbar-brand" href="/">
                        <h5 className="text-primary">Home</h5>
                    </a> 
                    <h5>/</h5>
                    <a className="nav-link color-black" href={`/decks/new`}><h5>New</h5></a>
                    </nav>
            </div>
        </div>
    )
  }

  function TitleBar(){
    return (
      <div className="row">
        <div className="col-12">
        <h1>Create Deck</h1>
        </div>
      </div>
    )
  }

  function handleOnSubmit(evt){
    evt.preventDefault();

    console.log("Submit button was clicked!: ", evt.target);
  }

  function NewDeckForm(){
    return (
      <div className="row">
        <div className="col-12">
          <form className="newDeckForm" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="newDeckName">Name</label>
              <input type="text" className="form-control" id="newDeckName" placeholder="Deck Name" />
            </div>
            <div className="form-group">
              <label htmlFor="newDeckDescription">Brief Description</label>
              <textarea className="form-control" id="newDeckDescription" placeholder="A concise description of the deck" rows="3"></textarea>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-secondary btn-lg" onClick={()=>history.go(-1)}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Nav />
      <TitleBar />
      <NewDeckForm />
    </div>  
  )
}

export default NewDeck;