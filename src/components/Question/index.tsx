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
}

const Question: React.FC<IQuestionProps> = ({ content, author, children }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className={styles.question}>
      <p>{content}</p>
      <footer>
        <div className={styles.user_info}>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
};

export default Question;
