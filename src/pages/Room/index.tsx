// Packages
import React from "react";
import { useParams } from "react-router-dom";

// Assets
import logoImg from "../../assets/images/logo.svg";

// Components
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";

// Styles
import styles from "./styles.module.scss";

interface IRoomParams {
  id: string;
}

const Room: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const params = useParams<IRoomParams>();

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className={styles.page_room}>
      <header>
        <div className={styles.content}>
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className={styles.room_title}>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <div className={styles.form_footer}>
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Room;
