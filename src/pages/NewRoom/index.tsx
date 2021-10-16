// Packages
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

// Assets
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

// Hooks
import { useAuth } from "../../hooks/useAuth";

// Components
import Button from "../../components/Button";

// Services
import { database } from "../../services/firebase";

// Styles
import styles from "./styles.module.scss";

const NewRoom: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [newRoom, setNewRoom] = useState<string>("");

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const { user } = useAuth();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div id={styles.page_auth}>
      <aside>
        <img
          src={illustrationImg}
          alt="Imagem simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiêcia em tempo real</p>
      </aside>
      <main>
        <div className={styles.main_content}>
          <img src={logoImg} alt="Logo" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
