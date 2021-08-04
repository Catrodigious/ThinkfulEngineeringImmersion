import React, {useState, useEffect} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import {listDecks} from "../utils/api";
import  Home from "../Components/Home";
import DeckView from "../Components/DeckView";
import Study from "../Components/Study";
import NewDeck from "../Components/NewDeck";
import EditDeck from "../Components/EditDeck";
import NewCard from "../Components/NewCard";
import EditCard from "../Components/EditCard";

function Layout() {
  const [decks, updateDecks] = useState([]);

  useEffect(()=>{
    async function getDecks(){
      const response = await listDecks();

      updateDecks([...response]);
    }
    getDecks();

  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          {/* Home */}
          <Route exact={true} path="/">
            <Home decks={decks} />
          </Route>

          <Route exact={true} path="/decks/new">
            <NewDeck />
          </Route>
          
          {/* Decks */}
          <Route exact={true} path="/decks/:deckId">
            <DeckView decks={decks} />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck decks={decks} />
          </Route>

          <Route path="/decks/:deckId/cards/new">
            <NewCard decks={decks} />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard decks={decks} />
          </Route>

          {/* Not Found */}
          <Route>
            <NotFound />
          </Route>

        </Switch>

      </div>
    </>
  );
}

export default Layout;
