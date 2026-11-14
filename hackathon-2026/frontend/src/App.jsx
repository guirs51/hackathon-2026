import { useState } from "react";
import Home from "./Home";
import "./App.css";

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

    // Muda para a tela inicial
    setLogado(true);
  }


  
  // FUNÇÃO DE CADASTRO

  

  function fazerCadastro(event) {
    event.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (nome === "" || email === "" || senha === "") {
      alert("Preencha todos os campos!");
      return;
    }

    alert("Cadastro realizado com sucesso!");

    // Entra no sistema após o cadastro
    setLogado(true);
  }

function VisaoGeral() {
  return (
    <div className="conteudo-tela">
      <div className="titulo-pagina">
        <h1>🏠 Visão Geral</h1>
        <p>Veja um resumo da sua saúde.</p>
      </div>

      <div className="boas-vindas">
        <h2>Olá! 👋</h2>
        <p>Bem-vinda ao ConectaSaúde.</p>
      </div>

      <div className="cards-resumo">
        <div className="card-resumo">
          <div className="icone">💊</div>
          <h3>Medicamentos</h3>
          <p>3 medicamentos para hoje</p>
        </div>

        <div className="card-resumo">
          <div className="icone">📅</div>
          <h3>Consultas</h3>
          <p>Próxima consulta em breve</p>
        </div>

        <div className="card-resumo">
          <div className="icone">📄</div>
          <h3>Exames</h3>
          <p>2 exames disponíveis</p>
        </div>

        <div className="card-resumo">
          <div className="icone">❤️</div>
          <h3>Saúde</h3>
          <p>Continue cuidando de você!</p>
        </div>
      </div>
    </div>
  );
}function Medicamentos() {
  const [tomados, setTomados] = useState([]);

  const medicamentos = [
    { id: 1, nome: "Paracetamol", dose: "500mg • 1 comprimido", horario: "08:00" },
    { id: 2, nome: "Vitamina D", dose: "1 cápsula", horario: "12:00" },
    { id: 3, nome: "Amoxicilina", dose: "500mg • 1 cápsula", horario: "20:00" }
  ];

  function marcarComoTomado(id) {
    if (tomados.includes(id)) {
      setTomados(tomados.filter((medicamentoId) => medicamentoId !== id));
    } else {
      setTomados([...tomados, id]);
    }
  }

  return (
    <div className="conteudo-tela">
      <div className="titulo-pagina">
        <h1>💊 Medicamentos</h1>
        <p>Acompanhe seus medicamentos do dia.</p>
      </div>

      <div className="lista-medicamentos">
        {medicamentos.map((medicamento) => (
          <div
            key={medicamento.id}
            className={`item-medicamento ${
              tomados.includes(medicamento.id) ? "tomado" : ""
            }`}
          >
            <div className="horario">{medicamento.horario}</div>

            <div className="info-medicamento">
              <h3>{medicamento.nome}</h3>
              <p>{medicamento.dose}</p>
            </div>

            <button
              className="botao-tomar"
              onClick={() => marcarComoTomado(medicamento.id)}
            >
              {tomados.includes(medicamento.id)
                ? "✓ Tomado"
                : "Marcar como tomado"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}function Consultas() {
  const consultas = [
    {
      id: 1,
      dia: "18",
      mes: "NOV",
      especialidade: "Clínico Geral",
      medico: "Dr. João Silva",
      horario: "14:00"
    },
    {
      id: 2,
      dia: "25",
      mes: "NOV",
      especialidade: "Cardiologia",
      medico: "Dra. Maria Santos",
      horario: "09:30"
    }
  ];

  return (
    <div className="conteudo-tela">
      <div className="titulo-pagina">
        <h1>📅 Consultas</h1>
        <p>Confira suas próximas consultas.</p>
      </div>

      <div className="cards-consultas">
        {consultas.map((consulta) => (
          <div className="consulta-card" key={consulta.id}>
            <div className="data-consulta">
              <strong>{consulta.dia}</strong>
              <span>{consulta.mes}</span>
            </div>

            <div className="info-consulta">
              <h3>{consulta.especialidade}</h3>
              <p>👨‍⚕️ {consulta.medico}</p>
              <p>🕐 {consulta.horario}</p>
            </div>

            <button className="botao-consulta">
              Ver detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}function Exames() {
  const exames = [
    {
      id: 1,
      nome: "Hemograma Completo",
      data: "10/11/2026",
      local: "Laboratório Central",
      status: "Pronto"
    },
    {
      id: 2,
      nome: "Exame de Sangue",
      data: "12/11/2026",
      local: "Laboratório Saúde",
      status: "Em análise"
    }
  ];

  return (
    <div className="conteudo-tela">
      <div className="titulo-pagina">
        <h1>📄 Exames</h1>
        <p>Veja seus exames e resultados disponíveis.</p>
      </div>

      <div className="tabela-exames">
        <div className="linha-tabela cabecalho-tabela">
          <span>Exame</span>
          <span>Data</span>
          <span>Status</span>
          <span>Ação</span>
        </div>

        {exames.map((exame) => (
          <div className="linha-tabela" key={exame.id}>
            <div>
              <strong>{exame.nome}</strong>
              <br />
              <small>{exame.local}</small>
            </div>

            <span>{exame.data}</span>

            <span
              className={`status ${
                exame.status === "Pronto" ? "pronto" : "analise"
              }`}
            >
              {exame.status}
            </span>

            <button className="botao-exame">
              Ver resultado
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}function Doacao() {
  const hemocentros = [
    {
      id: 1,
      nome: "Hemocentro Central",
      endereco: "Av. Principal, 100",
      horario: "Segunda a Sexta • 08:00 às 17:00"
    },
    {
      id: 2,
      nome: "Banco de Sangue Municipal",
      endereco: "Rua da Saúde, 250",
      horario: "Segunda a Sábado • 07:00 às 16:00"
    }
  ];

  return (
    <div className="conteudo-tela">
      <div className="titulo-pagina">
        <h1>🩸 Doação de Sangue</h1>
        <p>Sua doação pode salvar vidas. ❤️</p>
      </div>

      <div className="doacao-destaque">
        <div>
          <h2>Doe sangue. Compartilhe vida.</h2>
          <p>
            Uma única doação pode ajudar várias pessoas que precisam de sangue.
          </p>

          <button className="botao-doar">
            Quero ser doador ❤️
          </button>
        </div>

        <div className="gota-sangue">🩸</div>
      </div>

      <div className="hemocentros">
        <h2>🏥 Hemocentros próximos</h2>

        <div className="lista-hemocentros">
          {hemocentros.map((hemocentro) => (
            <div className="hemocentro-card" key={hemocentro.id}>
              <h3>{hemocentro.nome}</h3>
              <p>📍 {hemocentro.endereco}</p>
              <p>🕐 {hemocentro.horario}</p>

              <button className="botao-localizacao">
                Ver localização
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  // SE O USUÁRIO ESTIVER LOGADO
 

  if (logado) {
    return <Home />;
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

        {/* Se cadastro for verdadeiro, mostra o Cadastro */}
        {cadastro ? (

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


            {/* VOLTAR PARA LOGIN */}
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

            <h1>Bem-vinda ao conecta saúde💚</h1>
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


            {/* IR PARA CADASTRO */}
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