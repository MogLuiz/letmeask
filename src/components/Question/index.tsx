// Packages
import React from "react";

// Styles
import styles from "styles.module.scss";

interface IQuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
}

const Question: React.FC<IQuestionProps> = ({ content, author }) => {
  return (
    <div className={styles.question}>
      <p>{content}</p>
      <footer>
        <div className={styles.user_info}>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Question;
