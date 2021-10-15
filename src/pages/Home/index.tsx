// Packages
import React from "react";

// Assets
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";

// Styles
import styles from "./styles.module.scss";

const Home: React.FC = () => {
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
          <button type="button">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className={styles.separator}>Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Home;
