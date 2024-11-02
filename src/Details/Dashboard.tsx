import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Styles/Dashboard.css";

interface DashboardProps {
  onSelectedChange: (value: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectedChange }) => {
  const [selected, setSelected] = useState<string>("all");

  useEffect(() => {
    onSelectedChange(selected);
  }, [selected, onSelectedChange]);

  return (
    <div>
      <div className="My-Dashboard">
        <b>My Dashboard</b>
      </div>
      <motion.div
        style={{
          display: "flex",
        }}
      >
        {["all", "withdrawal", "savings", "deposit"].map((type) => (
          <motion.div
            key={type}
            className={`dashboardButtons ${
              selected === type ? "selected" : ""
            }`}
            onClick={() => setSelected(type)}
            animate={{
              backgroundColor:
                selected === type ? "rgb(0, 122, 153)" : "rgb(0, 71, 93)",
            }}
            transition={{ duration: 0.3 }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
