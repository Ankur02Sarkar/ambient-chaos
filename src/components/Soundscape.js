"use client";
import React, { useRef, useState } from "react";
import styles from "./Soundscape.module.css";

const Soundscape = ({ name, icon, audio }) => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0);

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    setVolume(volume);
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      if (volume > 0 && audioRef.current.paused) {
        audioRef.current.play();
      } else if (volume === 0) {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className={styles.soundscape}>
      <img src={icon} alt={name} className={styles.icon} />
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
        className={styles.slider}
      />
      <audio ref={audioRef} loop>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className={styles.label}>{name}</div>
    </div>
  );
};

export default Soundscape;
