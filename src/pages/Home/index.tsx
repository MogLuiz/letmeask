// Packages
import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";

// Assets
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

// Components
import Button from "../../components/Button";

// Hooks
import { useAuth } from "../../hooks/useAuth";

// Firebase
import { database } from "../../services/firebase";

// Styles
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [roomCode, setRoomCode] = useState("");

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === "") return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists");
      return;
    }

    if (roomRef.val().endedAt) {
      alert("Room already closed.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
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
          <button onClick={handleCreateRoom} className={styles.create_room}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className={styles.separator}>Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
