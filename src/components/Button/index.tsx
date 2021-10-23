// Packages
import { ButtonHTMLAttributes } from "react";

// Styles
import styles from "./styles.module.scss";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button: React.FC<IButtonProps> = ({ isOutlined = false, ...props }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <button
      className={`${styles.button} ${isOutlined ? styles.outlined : ""}`}
      {...props}
    />
  );
};

export default Button;
