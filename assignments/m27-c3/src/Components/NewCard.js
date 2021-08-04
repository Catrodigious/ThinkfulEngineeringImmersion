import React from "react";
import { useHistory, useParams } from "react-router-dom";

// Review React State Management - Forms w/Input Fields
//  https://courses.thinkful.com/zid-fe-react-state-management-v1/checkpoint/6

export const NewCard = function({decks}){
  const history = useHistory();
  const _deckId = Number(useParams().deckId);

  if (!decks) return null;
  const deck = decks.find((d)=>d.id ===_deckId);
  if (!deck) return null;
  console.log(deck);


  function Nav(){
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-flex">
                    <a className="navbar-brand" href="/">
                        <h5 className="text-primary">Home</h5>
                    </a> 
                    <h5>/</h5>
                    <a className="nav-link color-black" href={`/cards/new`}><h5>New</h5></a>
                    </nav>
            </div>
        </div>
    )
  }

  function TitleBar(){
    return (
      <div className="row">
        <div className="col-12">
        <h1>Create Card</h1>
        </div>
      </div>
    )
  }

  function handleOnSubmit(evt){
    evt.preventDefault();

    console.log("Submit button was clicked!: ", evt.target);
  }

  function NewCardForm(){
    return (
      <div className="row">
        <div className="col-12">
          <form className="newCardForm" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="newCardFront">Front</label>
              <textarea className="form-control" id="newCardFront" placeholder="Front side of card" rows="2"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="newCardBack">Back</label>
              <textarea className="form-control" id="newCardBack" placeholder="Back side of card" rows="2"></textarea>
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
      <NewCardForm />
    </div>  
  )
}

export default NewCard;