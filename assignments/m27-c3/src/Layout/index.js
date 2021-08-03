import React, {useState, useEffect} from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home from "../Components/Home";
import DeckView from "../Components/DeckView";
import {listDecks} from "../utils/api";

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
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact={true} path="/">
            < Home decks={decks}/>
          </Route>

          <Route path="/decks/:deckId">
            <DeckView decks={decks} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>

      </div>
    </>
  );
}

export default Layout;
