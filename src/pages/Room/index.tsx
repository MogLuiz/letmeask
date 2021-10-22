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

type FirebaseQuestions = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }
>;

interface IQuestions {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

const Room: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [title, setTitle] = useState("");

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const params = useParams<IRoomParams>();
  const { user } = useAuth();

  useEffect(() => {
    const roomRef = database.ref(`rooms/${params.id}`);

    roomRef.on("value", (room) => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions;

      const parsedQuestions = Object.entries(firebaseQuestions ?? {}).map(
        ([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered,
          };
        }
      );
      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    });
  }, [params.id]);

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
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
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
        {JSON.stringify(questions)}
      </main>
    </div>
  );
};

export default Room;
