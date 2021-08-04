import React from "react";
import { useHistory, useParams } from "react-router-dom";

// Needs wiring
// Review React State Management - Forms w/Input Fields
//  https://courses.thinkful.com/zid-fe-react-state-management-v1/checkpoint/6

export const EditDeck = function({decks}){
  const history = useHistory();
  const _id = Number(useParams().deckId);
  const deck = decks.find((d)=>d.id ===_id);

  if (!deck) return null;

  function Nav(){
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-flex">
                    <a className="navbar-brand" href="/">
                        <h5 className="text-primary">Home</h5>
                    </a> 
                    <h5>/</h5>
                    <a className="nav-link text-primary" href={`/decks/${_id}`}><h5>{deck.name}</h5></a>
                    <h5>/</h5>
                    <a className="nav-link text-secondary" href={`/decks/${_id}/edit`}><h5>Edit Deck</h5></a>
                    </nav>
            </div>
        </div>
    )
  }

  function TitleBar(){
    return (
      <div className="row">
        <div className="col-12">
        <h1>Edit Deck</h1>
        </div>
      </div>
    )
  }

  function handleOnSubmit(evt){
    evt.preventDefault();

    console.log("Submit button was clicked!: ", evt.target);
  }

  function EditDeckForm(){
    return (
      <div className="row">
        <div className="col-12">
          <form className="EditDeckForm" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="editDeckName">Name</label>
              <input type="text" className="form-control" id="editDeckName" placeholder={deck.name} />
            </div>
            <div className="form-group">
              <label htmlFor="editDeckDescription">Brief Description</label>
              <textarea className="form-control" id="editDeckDescription" placeholder={deck.description} rows="3"></textarea>
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
      <EditDeckForm />
    </div>  
  )
}

export default EditDeck;