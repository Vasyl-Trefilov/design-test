import React, { useState } from "react";
import "../Styles/Side.css";
import { motion } from "framer-motion";
import Icon from "../Details/Icon.tsx";
import Settings from "../Details/Settings.tsx";

const Side: React.FC = () => {
  const [selected, setSelected] = useState<string>("");
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const icons = ["home", "wallet", "statistics"];
  return (
    <div className="side-container">
      <motion.div className="menu-container">
        {icons.map((iconName) => (
          <Icon
            key={iconName}
            name={iconName}
            selected={selected}
            onClick={() => setSelected(iconName)}
          />
        ))}
      </motion.div>
      <Settings showSettings={showSettings} setShowSettings={setShowSettings} />
      <motion.div
        className="showSettings"
        style={{
          position: "absolute",
          top: "20%",
          left: "8%",
          borderRadius: "25px",
          zIndex: 20,
          padding: "50px",
          backgroundColor: "rgb(0, 71, 93)",
        }}
        initial={false}
        animate={{
          x: showSettings ? 10 : -10,
          y: showSettings ? 10 : -10,
          width: showSettings ? 500 : 0,
          height: showSettings ? 400 : 0,
          opacity: showSettings ? 0.7 : 0,
        }}
        transition={{ duration: 1 }}
      >
        <motion.div>Its Settings</motion.div>
      </motion.div>
      <motion.div className="log-out-container">
        <motion.div className="log-out" />
      </motion.div>
    </div>
  );
};

export default Side;
