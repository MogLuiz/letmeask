// Packages
import React from "react";

// Assets
import copyImg from "../../assets/images/copy.svg";

// Styles
import styles from "./styles.module.scss";

interface IPropsRoomCode {
  code: string;
}

const RoomCode: React.FC<IPropsRoomCode> = ({ code }) => {
  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button className={styles.room_code} onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala: {code}</span>
    </button>
  );
};

export default RoomCode;
