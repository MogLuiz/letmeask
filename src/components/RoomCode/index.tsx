// Packages
import React from "react";

// Assets
import copyImg from "../../assets/images/copy.svg";

// Styles
import styles from "./styles.module.scss";

const RoomCode: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button className={styles.room_code}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #2342342</span>
    </button>
  );
};

export default RoomCode;
