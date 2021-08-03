import React from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

export const DeckView = function({decks}){
    const _id = Number(useParams().deckId);
    const deck = decks.find((d)=>d.id ===_id);
    
    function DeckBlock(){
        return (
            <div className="row deck-block">
                <div className="col-12">
                    <h3>{deck.name}</h3>
                    <h5>{deck.description}</h5>
                </div>
                <div className="col-12">
                    <button type="button" className="btn btn-secondary btn-lg">
                        Edit
                    </button>
                    <button type="button" className="btn btn-primary btn-lg">
                        Study
                    </button>
                    <button type="button" className="btn btn-primary btn-lg">
                        Add Cards
                    </button>
                    <div className="float-right">
                    <button type="button" className="btn btn-danger btn-lg">
                        Trash
                    </button>
                    </div>
                </div>
            </div>
        )
    }

    function Nav(){
        return (
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light nav-flex">
                        <a className="navbar-brand" href="/">
                            <h5 className="text-primary">Home</h5>
                        </a> 
                        <h5>/</h5>
                        <a className="nav-link color-black"><h5>{deck.name}</h5></a>
                    </nav>
                </div>
            </div>
        )
    }
    if (deck){
        return (
            <div className="container">
                <Nav />
                <DeckBlock />
            </div>
        )
    }else{
        return null;
    }
}

export default DeckView;