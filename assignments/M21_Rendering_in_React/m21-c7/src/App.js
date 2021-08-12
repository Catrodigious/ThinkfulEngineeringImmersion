import { render } from "enzyme";
import React from "react";
import Clock from "./Clock";

function App(props) {
 return (props.loggedIn) ? <Clock /> : null;
}

export default App;
