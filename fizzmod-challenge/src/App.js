import React from "react";
import "./App.css";
import Header from "./containers/Header";
import Body from "./containers/Body/Body";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
