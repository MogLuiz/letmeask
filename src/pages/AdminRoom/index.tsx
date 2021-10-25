// Packages
import React, { FormEvent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// Assets
import logoImg from "../../assets/images/logo.svg";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

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
  // Hooks
  // -------------------------------------------------

  const params = useParams<IRoomParams>();
  const { user } = useAuth();
  const { title, questions } = useRoom(params.id);
  const history = useHistory();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const handleEndRoom = async () => {
    await database.ref(`rooms/${params.id}`).update({
      endedAt: new Date(),
    });
    history.push("/");
  };

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${params.id}/questions/${questionId}`).remove();
    }
  };

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${params.id}/questions/${questionId}`).update({
      isAnswered: true,
    });
  };

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${params.id}/questions/${questionId}`).update({
      isHighlighted: true,
    });
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
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.room_title}>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <div className={styles.question_list}>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                author={question.author}
                content={question.content}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                <div className={styles.admin_buttons}>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}
                  >
                    <img
                      src={checkImg}
                      alt="Marcar a perfunta como respondida"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque a pergunta" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteQuestion(question.id)}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </div>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default AdminRoom;
