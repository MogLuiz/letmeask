// Packages
import { ButtonHTMLAttributes } from "react";

// Styles
import styles from "./styles.module.scss";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<IButtonProps> = (props) => {
  return <button className={styles.button} {...props} />;
};

export default Button;
