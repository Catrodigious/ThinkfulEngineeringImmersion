import React from "react";
import { useHistory, useParams } from "react-router-dom";

// Needs wiring
// Review React State Management - Forms w/Input Fields
//  https://courses.thinkful.com/zid-fe-react-state-management-v1/checkpoint/6

export const EditCard = function({decks}){

  const history = useHistory();
  const _deckId = Number(useParams().deckId);
  const _cardId = Number(useParams().cardId);
  if (!decks) return null;
  const deck = decks.find((d)=>d.id ===_deckId);
  if (!deck) return null;
  console.log(deck);
  const card = deck.cards.find((c)=>c.id===_cardId);

  function Nav(){
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-flex">
                    <a className="navbar-brand" href="/">
                        <h5 className="text-primary">Home</h5>
                    </a> 
                    <h5>/</h5>
                    <a className="nav-link text-primary" href={`/decks/${_deckId}/cards/${_cardId}`}><h5>{deck.name}</h5></a>
                    <h5>/</h5>
                    <a className="nav-link text-secondary" href={`/decks/${_deckId}/cards/${_cardId}/edit`}><h5>Edit Card {_cardId}</h5></a>
                    </nav>
            </div>
        </div>
    )
  }

  function TitleBar(){
    return (
      <div className="row">
        <div className="col-12">
        <h1>Edit Card</h1>
        </div>
      </div>
    )
  }

  function handleOnSubmit(evt){
    evt.preventDefault();

    console.log("Submit button was clicked!: ", evt.target);
  }

  function EditCardForm(){
    return (
      <div className="row">
        <div className="col-12">
          <form className="EditCardForm" onSubmit={handleOnSubmit}>
          <div className="form-group">
              <label htmlFor="editCardFront">Front</label>
              <textarea className="form-control" id="editCardFront" placeholder={card.front} rows="2"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="editCardBack">Back</label>
              <textarea className="form-control" id="editCardBack" placeholder={card.back} rows="2"></textarea>
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
      <EditCardForm />
    </div>  
  )
}

export default EditCard;