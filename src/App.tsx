import React from "react";
import Side from "./Components/Side.tsx";
import Header from "./Components/Header.tsx";
import Main from "./Components/Main.tsx";
import "./Styles/App.css";
import Card from "./Components/Card.tsx";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div style={{ display: "flex", marginTop: "80px" }}>
        <Side />
        <Main />
        <Card />
      </div>
    </div>
  );
}

export default App;
