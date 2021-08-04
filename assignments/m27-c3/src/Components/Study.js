import React, { useState,  } from "react";
import { useParams, useHistory } from "react-router-dom";

export const Study = function({decks}){
  const history = useHistory();
  const [isFlipped, setFlipped] = useState(false);
  const [focus, setFocus] = useState(1);

  const _id = Number(useParams().deckId);
  const deck = decks.find((d)=>d.id ===_id);

  if (!deck) return null;

  const cards = deck.cards || null;
  if (!cards) return null;


  function Nav(){
    return (
        <div className="row">
            <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-flex">
                    <a className="navbar-brand" href="/">
                        <h5 className="text-primary">Home</h5>
                    </a> 
                    <h5>/</h5>
                    <a className="nav-link text-primary" href={`/decks/${deck.id}`}><h5>{deck.name}</h5></a>
                    <h5>/</h5>
                    <a className="nav-link text-secondary" href={`/decks/${deck.id}/study`}><h5>Study</h5></a>
                </nav>
            </div>
        </div>
    )
  }

  function TitleBar(){
    return (
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">{deck.name}: Study</h1>
        </div>
    </div>
    )
  }

  function handleNext(){
    if (focus < cards.length){
      setFocus(focus+1);
      setFlipped(false);
    }
  }

  function handleCardFlip(){
    setFlipped(!isFlipped);
  }

  function Finish(){
    return (
      <div className="float-right">
        <button type="button" className="btn btn-danger btn-lg" onClick={()=>history.go(-1)}>Finish</button>
      </div>
    )
  }

  function StudyCard(){
    return (
      <div className="row">
        <div className="col-12">
          <div className="card card-block">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <h2>Card {focus} of {cards.length}</h2>
                  </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <h4>{!isFlipped ? cards[focus - 1].front : cards[focus -1].back}</h4>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                <button type="button" className="btn btn-secondary btn-lg" onClick={()=>handleCardFlip()}>
                  Flip ({isFlipped ? "Front" : "Back" })
                </button>
                { (isFlipped && focus < cards.length) &&
                  <button type="button" className="btn btn-primary btn-lg" onClick={()=>  {handleNext()}}>Next</button>
                  }

                  {focus === cards.length && <Finish />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Nav />
      <TitleBar />
      <StudyCard />
    </div>
  )
}

export default Study;