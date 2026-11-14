import { useState } from "react";
import "../css/Home.css";

import Usuario from "./Usuario";
import VisaoGeral from "./VisaoGeral";
import Consultas from "./Consulta";
import Exames from "./Exames";
import Historico from "./Historico";

function Home() {
  // Controla qual tela está sendo exibida
  const [menuAtivo, setMenuAtivo] = useState("Início");

  // Controla se a tela de contato de emergência está aberta
  const [mostrarEmergencia, setMostrarEmergencia] = useState(false);

  // Guarda as informações do contato de emergência
  const [nomeContato, setNomeContato] = useState("");
  const [telefoneContato, setTelefoneContato] = useState("");
  const [relacaoContato, setRelacaoContato] = useState("");

  // Função que escolhe qual tela será mostrada
  function mostrarTela() {
    switch (menuAtivo) {
      case "Usuario":
        return (
          <Usuario
            voltar={() => setMenuAtivo("Início")}
          />
        );

      case "Consultas":
        return <Consultas />;

      case "Exames":
        return <Exames />;

      case "Historico":
        return <Historico />;

      default:
        return <VisaoGeral mudarTela={setMenuAtivo} />;
    }
  }

  // Cadastra o contato de emergência
  function cadastrarContato(event) {
    event.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (
      nomeContato === "" ||
      telefoneContato === "" ||
      relacaoContato === ""
    ) {
      alert("⚠️ Preencha todos os campos!");
      return;
    }

    alert(`🚨 Contato de emergência cadastrado com sucesso!

👤 Nome: ${nomeContato}
📱 Telefone: ${telefoneContato}
❤️ Relação: ${relacaoContato}`);

    // Limpa os campos
    setNomeContato("");
    setTelefoneContato("");
    setRelacaoContato("");

    // Fecha a tela
    setMostrarEmergencia(false);
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
            className={menuAtivo === "Historico" ? "ativo" : ""}
            onClick={() => setMenuAtivo("Historico")}
          >
            📋 <span>Histórico Médico</span>
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

            <button className="notificacao">
              🔔
            </button>

            {/* AVATAR - VAI PARA O PERFIL */}
            <div
              className="avatar"
              onClick={() => setMenuAtivo("Usuario")}
              title="Ver meu perfil"
              role="button"
              tabIndex={0}
            >
              👩
            </div>

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
        onClick={() => setMostrarEmergencia(true)}
      >
        <span>🚨</span>

        <div>
          <strong>Emergência</strong>
          <small>Cadastrar contato de emergência</small>
        </div>
      </button>

      {/* TELA DE CADASTRO DO CONTATO */}
      {mostrarEmergencia && (
        <div className="fundo-alarme">

          <div className="card-alarme">

            {/* BOTÃO PARA FECHAR */}
            <button
              className="fechar-alarme"
              onClick={() => setMostrarEmergencia(false)}
              type="button"
            >
              ✕
            </button>

            <div className="icone-alarme">
              🚨
            </div>

            <h2>Contato de Emergência</h2>

            <p>
              Cadastre uma pessoa para entrar em contato em caso de emergência.
            </p>

            <form onSubmit={cadastrarContato}>

              <label>👤 Nome do contato</label>

              <input
                type="text"
                placeholder="Digite o nome da pessoa"
                value={nomeContato}
                onChange={(event) =>
                  setNomeContato(event.target.value)
                }
              />

              <label>📱 Telefone</label>

              <input
                type="tel"
                placeholder="(00) 00000-0000"
                value={telefoneContato}
                onChange={(event) =>
                  setTelefoneContato(event.target.value)
                }
              />

              <label>❤️ Relação</label>

              <input
                type="text"
                placeholder="Ex.: Mãe, Pai, Amigo..."
                value={relacaoContato}
                onChange={(event) =>
                  setRelacaoContato(event.target.value)
                }
              />

              <button
                type="submit"
                className="botao-ativar-alarme"
              >
                ❤️ Salvar contato
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default Home;