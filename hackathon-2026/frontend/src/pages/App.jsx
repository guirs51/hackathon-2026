import { useState } from "react";
import Home from "./Home";
import "../css/App.css"

function App() {
  // Estados para guardar as informações digitadas
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  // Controla se a tela atual é Login ou Cadastro
  const [cadastro, setCadastro] = useState(false);

  // Controla se o usuário entrou no sistema
  const [logado, setLogado] = useState(false);

  // FUNÇÃO DE LOGIN
  function fazerLogin(event) {
    event.preventDefault();

    // Verifica se os campos estão preenchidos
    if (email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    // Entra no sistema
    setLogado(true);
  }

  // FUNÇÃO DE CADASTRO
  function fazerCadastro(event) {
    event.preventDefault();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    alert("Cadastro realizado com sucesso! 💚");

    // Entra no sistema após o cadastro
    setLogado(true);
  }

  // FUNÇÃO PARA SAIR DA CONTA
  function sairDaConta() {
    setLogado(false);
    setEmail("");
    setSenha("");
  }

  // SE O USUÁRIO ESTIVER LOGADO
  if (logado) {
    return <Home sair={sairDaConta} />;
  }

  // TELA DE LOGIN E CADASTRO
  return (
    <div className="pagina">

      {/* DECORAÇÕES DO FUNDO */}
      <div className="decoracao circulo circulo1"></div>
      <div className="decoracao circulo circulo2"></div>
      <div className="decoracao circulo circulo3"></div>

      <div className="icone-saude cruz1">+</div>
      <div className="icone-saude cruz2">+</div>
      <div className="icone-saude cruz3">+</div>

      {/* CAIXA DE LOGIN OU CADASTRO */}
      <div className={`login ${cadastro ? "cadastro" : ""}`}>

        {cadastro ? (

          /* TELA DE CADASTRO */
          <div className="conteudo-formulario">

            <h1>Crie sua conta 💚</h1>
            <p>Cadastre-se para cuidar da sua saúde.</p>

            <form onSubmit={fazerCadastro}>

              <label>Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />

              <label>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <label>Senha</label>
              <input
                type="password"
                placeholder="Crie uma senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />

              <button type="submit">
                Cadastrar
              </button>

            </form>

            <button
              type="button"
              className="trocar"
              onClick={() => setCadastro(false)}
            >
              Já tenho uma conta
            </button>

          </div>

        ) : (

          /* TELA DE LOGIN */
          <div className="conteudo-formulario">

            <h1>Bem-vinda ao Conecta Saúde 💚</h1>
            <p>Faça login para continuar</p>

            <form onSubmit={fazerLogin}>

              <label>E-mail</label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <label>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />

              <button type="submit">
                Entrar
              </button>

            </form>

            <button
              type="button"
              className="trocar"
              onClick={() => setCadastro(true)}
            >
              Criar uma conta
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default App;