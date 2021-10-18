// Packages
import React from "react";

// Assets
import logoImg from "../../assets/images/logo.svg";

// Components
import Button from "../../components/Button";

const Room: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="page_room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>código</div>
        </div>
      </header>

      <main className="content">
        <div className="room_title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <div className="form_footer">
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Room;
