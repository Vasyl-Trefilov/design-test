import React from "react"
import Side from "./Components/Side.tsx";
import Header from "./Components/Header.tsx";
import Main from "./Components/Main.tsx";
import "./Styles/App.css"

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Side></Side>
      <Main></Main>
    </div>
  );
}

export default App;
