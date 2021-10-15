// Packages
import React from "react";
import { useHistory } from "react-router";

// Assets
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

// Components
import Button from "../../components/Button";

// Styles
import styles from "./styles.module.scss";

const Home: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const history = useHistory();

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const navigateToNewRoom = () => {
    history.push("/rooms/new");
  };

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
          <button onClick={navigateToNewRoom} className={styles.create_room}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className={styles.separator}>Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="button">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
