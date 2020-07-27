import React from "react";
import "./App.css";
import Header from "./containers/Header";
import Body from "./containers/Body/Body";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
