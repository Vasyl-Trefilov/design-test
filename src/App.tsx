import React from "react";
import Side from "./Components/Side.tsx";
import Header from "./Components/Header.tsx";
import Main from "./Components/Main.tsx";
import "./Styles/App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div style={{ display: "flex", marginTop: "80px" }}>
        <Side />
        <Main />
      </div>
    </div>
  );
}

export default App;
