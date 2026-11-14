import { useState } from "react";
import "./Home.css";

import VisaoGeral from "./VisaoGeral";
import Medicamentos from "./Medicamento";
import Consultas from "./Consulta";
import Exames from "./Exames";
import Doacao from "./Doacao";

function Home() {
  const [menuAtivo, setMenuAtivo] = useState("Início");

  // Função que escolhe qual tela será mostrada
  function mostrarTela() {
    switch (menuAtivo) {
      case "Medicamentos":
        return <Medicamentos />;

      case "Consultas":
        return <Consultas />;

      case "Exames":
        return <Exames />;

      case "Doação":
        return <Doacao />;

      default:
        return <VisaoGeral />;
    }
  }

  return (
    <div className="home">

      {/* MENU LATERAL */}
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
            className={menuAtivo === "Medicamentos" ? "ativo" : ""}
            onClick={() => setMenuAtivo("Medicamentos")}
          >
            💊 <span>Medicamentos</span>
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

          <button
            className={menuAtivo === "Doação" ? "ativo" : ""}
            onClick={() => setMenuAtivo("Doação")}
          >
            🩸 <span>Doação de Sangue</span>
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

      {/* CONTEÚDO PRINCIPAL */}
      <main className="dashboard">

        {/* CABEÇALHO */}
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

        {/* TROCA DE TELAS */}
        <div className="tela-container" key={menuAtivo}>
          {mostrarTela()}
        </div>

      </main>

      {/* BOTÃO DE EMERGÊNCIA */}
      <button
        className="emergencia"
        onClick={() =>
          alert("🚨 Emergência acionada! Procure ajuda imediatamente.")
        }
      >
        <span>🚨</span>

        <div>
          <strong>Emergência</strong>
          <small>Toque para pedir ajuda</small>
        </div>
      </button>

    </div>
  );
}

export default Home;