import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header/Header";
import Body from "./src/components/body/Body";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
