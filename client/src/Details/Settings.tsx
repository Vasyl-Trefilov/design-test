import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Styles/Settings.css";

interface SettingsProps {
  showSettings: boolean;
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsProps> = ({
  showSettings,
  setShowSettings,
}) => {
  const [notificationOn, setNotificationOn] = useState<boolean>(true);
  const [shake, setShake] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    if (hasInteracted) {
      setShake(true);
      const timer = setTimeout(() => {
        setShake(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [notificationOn, hasInteracted]);

  return (
    <motion.div className="settings-container">
      <motion.div
        className={`notifications-icon ${
          notificationOn ? "notifications-on" : "notifications-off"
        }`}
        onClick={() => {
          setNotificationOn(!notificationOn);
          setHasInteracted(true);
        }}
        initial={false}
        animate={shake ? "shake" : ""}
        variants={{
          shake: {
            rotateZ: [0, -15, 15, -15, 0],
            transition: {
              duration: 1,
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              ease: "easeInOut",
            },
          },
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: notificationOn ? "80%" : 0 }}
          transition={{ duration: 0.5 }}
          style={{
            height: "3px",
            backgroundColor: "#1B1B1B",
            opacity: 0.9,
            position: "absolute",
            top: "50%",
            rotateZ: -45,
            left: "50%",
            originX: 0.5,
            originY: 0.5,
            x: "-50%",
          }}
        />
      </motion.div>
      <motion.div
        onClick={() => setShowSettings(!showSettings)}
        className="settigns-icon"
        initial={false}
        animate={{ rotateZ: showSettings ? 180 : 0 }}
        transition={{ duration: 1 }}
      ></motion.div>
    </motion.div>
  );
};

export default Settings;
