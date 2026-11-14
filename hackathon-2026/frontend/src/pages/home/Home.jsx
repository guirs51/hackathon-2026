
import { useState } from "react";
import "./Home.css";

import VisaoGeral from "../visaoGeral/VisaoGeral";
import Consultas from "../consultas/Consulta";
import Exames from "../exames/Exames";
import Emergencia from "../../components/Emergencia";

function Home() {
  const [menuAtivo, setMenuAtivo] = useState("Início");

  function mostrarTela() {
    switch (menuAtivo) {
      case "Medicamentos":
        return <p>Área de medicamentos em desenvolvimento.</p>;

      case "Consultas":
        return <Consultas />;

      case "Exames":
        return <Exames />;

      // case "Doação":
      //   return <p>Área de doação de sangue em desenvolvimento.</p>;

      default:
        return <VisaoGeral />;
    }
  }

  return (
    <div className="home">

      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icone">♥</div>
          <span>
            Conecta<span>Saúde</span>
          </span>
        </div>

        <nav className="menu">
          <button
            className={menuAtivo === "Início" ? "ativo" : ""}
            onClick={() => setMenuAtivo("Início")}
          >
            🏠 <span>Visão Geral</span>
          </button>

          <button
            className={menuAtivo === "Consultas" ? "ativo" : ""}
            onClick={() => setMenuAtivo("Consultas")}
          >
            📅 <span>Consultas</span>
          </button>

          <button
            className={menuAtivo === "Exames" ? "ativo" : ""}
            onClick={() => setMenuAtivo("Exames")}
          >
            📄 <span>Exames</span>
          </button>
        </nav>

        <div className="ajuda">
          <span>💬</span>
          <div>
            <strong>Precisa de ajuda?</strong>
            <p>Estamos aqui para você</p>
          </div>
        </div>
      </aside>

      <main className="dashboard">

        <header className="topo">
          <div className="busca">
            🔍
            <input
              type="text"
              placeholder="Buscar informações de saúde..."
            />
          </div>

          <div className="usuario">
            <button className="notificacao">🔔</button>
            <div className="avatar">👩</div>

            <div className="dados-usuario">
              <strong>Olá, Usuária!</strong>
              <span>Seu espaço de saúde</span>
            </div>
          </div>
        </header>

        <div className="tela-container" key={menuAtivo}>
          {mostrarTela()}
        </div>

      </main>

      <Emergencia />
    </div>
  );
}

export default Home;
