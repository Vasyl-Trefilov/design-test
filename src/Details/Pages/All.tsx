import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../Styles/All.css";

const All: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const tables = [1500, 500, 1000, 123, 0, 2500, 444, 987];
  return (
    <div>
      <motion.div>
        <motion.div className="revenue-container">
          <motion.div style={{ display: "flex" }}>
            <p style={{ fontSize: 30, marginTop: 0 }}>Revenue Flow</p>
            <div style={{ marginLeft: "auto" }}>View All &gt;</div>
          </motion.div>
          <motion.div style={{ display: "flex" }}>
            <motion.div>
              <div style={{ marginBottom: 10 }}>2.5k$</div>
              <div style={{ marginBottom: 10 }}>2.0k$</div>
              <div style={{ marginBottom: 10 }}>1.5k$</div>
              <div style={{ marginBottom: 10 }}>1k$</div>
              <div style={{ marginBottom: 10 }}>0.5k$</div>
              <div style={{ marginBottom: 10 }}>0$</div>
            </motion.div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              {tables.map((name, index) => (
                <motion.div
                  className="tower"
                  initial={{
                    background:
                      "repeating-linear-gradient(45deg, rgb(149, 67, 255), rgb(149, 67, 255) 2px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0) 10px)",
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ background: "rgb(149, 67, 255)" }}
                  transition={{ duration: 5 }}
                  style={
                    {
                      alignItems: "flex-end",
                      marginLeft: 20,
                      width: 90,
                      height: name / 15,
                      borderRadius: 25,
                      display: "flex",
                      justifyContent: "center",
                      transformOrigin: "bottom",
                      animation: "move-lines 2s ease-in-out infinite",
                      // Приведение типа для объекта стиля
                      "--height": `${name / 15}px` as any, // используем 'as any'
                    } as React.CSSProperties
                  } // приведение всего объекта стиля
                >
                  {hoveredIndex === index && (
                    <div style={{ position: "relative" }}>
                      <motion.div
                        style={{
                          width: 20,
                          height: 20,
                          boxShadow:
                            "0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 0.5)",
                          border: "10px solid rgba(231, 238, 240, 1)",
                          borderRadius: "100%",
                          zIndex: 4,
                        }}
                        initial={{ x: 0, y: 0 }}
                        animate={{ y: -name / 15 + 20 }}
                      ></motion.div>
                      <motion.div
                        style={{
                          position: "absolute",
                          transformOrigin: "bottom",
                          background: "rgb(2, 56, 87)",
                          alignContent: "center",
                          justifyContent: "center",
                          width: 75,
                          opacity: 0.9,
                          paddingLeft: 10,
                          height: 45,
                          borderRadius: 25,
                        }}
                        initial={{ x: 0, y: 0 }}
                        animate={{ x: -70, y: -name / 15 - 45 }}
                      >
                        +${name}
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default All;
