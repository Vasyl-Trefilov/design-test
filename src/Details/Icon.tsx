import React from "react";
import "../Styles/Side.css";
import { motion } from "framer-motion";

const Icon = ({ name, selected, onClick }) => {
  
  return (
    <motion.div
      onClick={onClick}
      className={`${name}-icon`}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.div
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
        initial={{ width: 0, height: 0 }}
        animate={{
          width: selected === name ? 50 : 0,
          height: selected === name ? 50 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      ></motion.div>
    </motion.div>
  );
};
export default Icon;
