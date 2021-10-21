// Packages
import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

// Assets
import logoImg from "../../assets/images/logo.svg";

// Components
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";

// Database
import { database } from "../../services/firebase";

// Hooks
import { useAuth } from "../../hooks/useAuth";

// Styles
import styles from "./styles.module.scss";
import { useEffect } from "react";

interface IRoomParams {
  id: string;
}

const Room: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [newQuestion, setNewQuestion] = useState("");

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const params = useParams<IRoomParams>();
  const { user } = useAuth();

  useEffect(() => {
    const roomRef = database.ref(`rooms/${params.id}`);

    roomRef.once("value", (room) => {
      const parsedQuestions = Object.entries(room.questions ?? {});
    });
  }, []);

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === "") return;

    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${params.id}/questions`).push(question);

    setNewQuestion("");
  };

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

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className={styles.form_footer}>
            {user ? (
              <div className={styles.user_info}>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </span>
            )}
            <Button type="submit" disabled={!user}>
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Room;
