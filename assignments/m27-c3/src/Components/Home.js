import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./styles.css";

function Home({decks}){
    function CreateDeck(){
        return (       
            <div className="row">     
                <div className="col-2">
                    <button type="button" className="btn btn-secondary">
                        <span className="iconic" data-glyph="plus" title="plus" aria-hidden="true"></span>
                        Create Deck
                    </button>
                </div>
            </div>
        )
    }

    function displayDeckBlock(deck){
        return (
            <div className="row" key={`deck_${deck.id}`}>
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            {/* card header */}
                            <div className="row">
                                <div className="col-8">
                                    <h5 className="card-title">{deck.name}</h5>
                                </div>
                                <div className="col-4">
                                    <p>{deck.cards.length} Cards</p>
                                </div>
                            </div>
                            <div className="row">
                                <p className="card-text">{deck.description}</p>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <button type="button" className="btn btn-secondary">
                                        <Link to={`decks/${deck.id}`}>View</Link>
                                    </button>
                                    <button type="button" className="btn btn-primary">Study</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-danger">Trash</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-6"></div>
            </div>
        )
    }

    function DisplayAllDecks(){
        return decks.map((deck)=>displayDeckBlock(deck))
    }
    
    return (
        <div id="Home" className="container">
            <CreateDeck />
            <DisplayAllDecks />
        </div>
    )
}

export default Home;