// Packages
import React, { ReactNode } from "react";

// Styles
import styles from "./styles.module.scss";

interface IQuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  hasLiked?: boolean;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

const Question: React.FC<IQuestionProps> = ({
  content,
  author,
  children,
  hasLiked = false,
  isAnswered = false,
  isHighlighted = false,
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div
      className={`${styles.question} ${isAnswered ? styles.answered : ""} ${
        isHighlighted && !isAnswered ? styles.highlighted : ""
      }`}
    >
      <p>{content}</p>
      <footer>
        <div className={`${styles.user_info} `}>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className={`${hasLiked ? styles.liked : ""}`}>{children}</div>
      </footer>
    </div>
  );
};

export default Question;
