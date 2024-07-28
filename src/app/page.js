// src/pages/index.js
import React from "react";
import { soundscapes } from "../data";
import Soundscape from "../components/Soundscape";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Ambient Sound Interface</h1>
      <div className={styles.grid}>
        {soundscapes.map((soundscape, index) => (
          <Soundscape
            key={index}
            name={soundscape.name}
            icon={soundscape.icon}
            audio={soundscape.audio}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
