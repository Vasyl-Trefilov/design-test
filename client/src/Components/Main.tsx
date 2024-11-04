import React, { useState } from "react";
import Dashboard from "../Details/Dashboard.tsx";
import MainContainer from "../Details/MainContainer.tsx";

const Main: React.FC = () => {
  const [selected, setSelected] = useState<string>("all");

  return (
    <div style={{width: 1000}}>
      <Dashboard onSelectedChange={setSelected} />
      <MainContainer selected={selected} />
    </div>
  );
};

export default Main;
