import React, {useState, useEffect} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import {listDecks} from "../utils/api";
import  Home from "../Components/Home";
import DeckView from "../Components/DeckView";
import Study from "../Components/Study";

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
          
          {/* Decks */}
          <Route exact={true} path="/decks/:deckId">
            <DeckView decks={decks} />
          </Route>

          <Route path="/decks/:deckId/study">
            <Study decks={decks} />
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
