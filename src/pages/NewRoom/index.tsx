// Packages
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Assets
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";

// Context
import { AuthContext } from "../../App";

// Components
import Button from "../../components/Button";

// Styles
import styles from "./styles.module.scss";

const NewRoom: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const { user } = useContext(AuthContext);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div id={styles.page_auth}>
      <aside>
        <img
          src={illustrationImg}
          alt="Imagem simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiêcia em tempo real</p>
      </aside>
      <main>
        <div className={styles.main_content}>
          <img src={logoImg} alt="Logo" />
          <h1>{user?.name}</h1>
          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="button">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default NewRoom;
