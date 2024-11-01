import React from "react";
import "../Styles/Header.css";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="site-icon" />
      <p className="site-name">
        <b>NexusBank</b>
      </p>
      <div className="input-container">
        <div className="search-icon"></div>
        <input
          type="search"
          placeholder="Search payment"
          className="search-panel"
        />
      </div>
      <div className="header-end">
        <p>
          <b>Hi Vasyl!</b>
        </p>
        <div className="avatar"></div>
      </div>
    </div>
  );
};
export default Header;
