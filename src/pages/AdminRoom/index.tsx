// Packages
import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";

// Assets
import logoImg from "../../assets/images/logo.svg";

// Components
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import Question from "../../components/Question";

// Database
import { database } from "../../services/firebase";

// Hooks
import { useAuth } from "../../hooks/useAuth";
import { useRoom } from "../../hooks/useRoom";

// Styles
import styles from "./styles.module.scss";

interface IRoomParams {
  id: string;
}

const AdminRoom: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [newQuestion, setNewQuestion] = useState("");

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------

  const params = useParams<IRoomParams>();
  const { user } = useAuth();
  const { title, questions } = useRoom(params.id);

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
          <div>
            <RoomCode code={params.id} />
            <Button isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.room_title}>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <div className={styles.question_list}>
          {questions.map((item) => {
            return (
              <Question
                key={item.id}
                author={item.author}
                content={item.content}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
