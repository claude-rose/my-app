import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
