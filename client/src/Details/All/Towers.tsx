import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Towers: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const showTowers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/get_all");
        if (response.data && response.data.length > 0) {
          setData(response.data);
        } else {
          setData([1000, 678, 983, 2500]);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        setData([1000, 678, 983, 2500]);
      }
    };

    showTowers();
  }, []);

  return (
    <motion.div className="revenue-container">
      <motion.div style={{ display: "flex" }}>
        <p style={{ fontSize: 30, marginTop: 0 }}>Revenue Flow</p>
        <div style={{ marginLeft: "auto" }}>View All &gt;</div>
      </motion.div>
      <motion.div style={{ display: "flex" }}>
        <motion.div>
          <div style={{ marginBottom: 10, fontSize: 20 }}>2.5k$</div>
          <div style={{ marginBottom: 10, fontSize: 20 }}>2.0k$</div>
          <div style={{ marginBottom: 10, fontSize: 20 }}>1.5k$</div>
          <div style={{ marginBottom: 10, fontSize: 20 }}>1k$</div>
          <div style={{ marginBottom: 10, fontSize: 20 }}>0.5k$</div>
          <div style={{ marginBottom: 10, fontSize: 20 }}>0$</div>
        </motion.div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          {data.map((name, index) => (
            <motion.div
              key={index}
              className="tower"
              initial={{
                background:
                  "repeating-linear-gradient(45deg, rgb(149, 67, 255), rgb(149, 67, 255) 2px, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0) 10px)",
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ background: "rgb(149, 67, 255)" }}
              transition={{ duration: 0.3 }}
              style={{
                alignItems: "flex-end",
                marginLeft: 20,
                width: 90,
                marginBottom: 15,
                height: name ? name / 16 : 0,
                borderRadius: 25,
                display: "flex",
                justifyContent: "center",
                transformOrigin: "bottom",
              }}
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
                    animate={{ y: -name / 16 + 20 }}
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
                    animate={{ x: -70, y: -name / 16 - 45 }}
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
  );
};

export default Towers;
