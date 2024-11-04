import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../Styles/All.css";
import Towers from "./Towers.tsx";

const All: React.FC = () => {
  return (
    <div>
      <motion.div>
        <Towers />
      </motion.div>
    </div>
  );
};

export default All;
