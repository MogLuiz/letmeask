// Packages
import React from "react";

// Assets
import copyImg from "../../assets/images/copy.svg";

// Styles
import styles from "./styles.module.scss";

interface IPropsRoomCode {
  codeRoom: string;
}

const RoomCode: React.FC<IPropsRoomCode> = ({ codeRoom }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button className={styles.room_code}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala: {codeRoom}</span>
    </button>
  );
};

export default RoomCode;
