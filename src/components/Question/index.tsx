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
      <p></p>
    </div>
  );
};

export default Question;
