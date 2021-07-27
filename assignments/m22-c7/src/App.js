import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import RSVPForm from "./RSVPForm";

function App() {
  return (
    <div className="App">
      <h1>RSVPForm Example</h1>
      <div className="example">
        <RSVPForm />
      </div>
    </div>
  );
}

export default App;
