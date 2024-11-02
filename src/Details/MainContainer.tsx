import React from "react";
import All from "./Pages/All.tsx";

interface MainContainerProps {
  selected: string;
}

const MainContainer: React.FC<MainContainerProps> = ({ selected }) => {
  return <div>{selected === "all" && <All />}</div>;
};

export default MainContainer;
