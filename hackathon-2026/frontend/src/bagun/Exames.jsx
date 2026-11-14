import { useState } from "react";
import "./Exemes.css";

function Exames() {
  const [exames, setExames] = useState([
    {
      nome: "🩸 Hemograma",
      data: "10/11/2026",
      status: "Disponível"
    },
    {
      nome: "🫁 Raio-X",
      data: "05/11/2026",
      status: "Disponível"
    },
    {
      nome: "🩺 Exame de rotina",
      data: "01/11/2026",
      status: "Em análise"
    },
    {
      nome: "❤️ Eletrocardiograma",
      data: "28/10/2026",
      status: "Disponível"
    },
    {
      nome: "🧪 Exame de sangue",
      data: "20/10/2026",
      status: "Disponível"
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [novoExame, setNovoExame] = useState({
    nome: "",
    data: "",
    status: "Em análise"
  });

  function adicionarExame(event) {
    event.preventDefault();

    if (!novoExame.nome || !novoExame.data) {
      alert("⚠️ Preencha o nome e a data do exame!");
      return;
    }

    setExames([...exames, novoExame]);

    setNovoExame({
      nome: "",
      data: "",
      status: "Em análise"
    });

    setMostrarFormulario(false);
  }

  return (
    <div className="pagina-exames">

      {/* DECORAÇÕES DO FUNDO */}
      <div className="decoracao-exame decoracao-1">+</div>
      <div className="decoracao-exame decoracao-2">✦</div>
      <div className="decoracao-exame decoracao-3">●</div>

      {/* TÍTULO */}
      <div className="titulo-pagina-exames">
        <div>
          <p className="pequeno-titulo-exames">
            INFORMAÇÕES MÉDICAS
          </p>

          <h1>📄 Meus Exames</h1>

          <span>
            Visualize, organize e adicione seus exames.
          </span>
        </div>

        <button
          className="botao-principal-exames"
          onClick={() => setMostrarFormulario(true)}
        >
          ⬆ Adicionar exame
        </button>
      </div>

      {/* FORMULÁRIO */}
      {mostrarFormulario && (
        <form
          className="formulario-exame"
          onSubmit={adicionarExame}
        >
          <h2>➕ Adicionar novo exame</h2>

          <input
            type="text"
            placeholder="Nome do exame"
            value={novoExame.nome}
            onChange={(event) =>
              setNovoExame({
                ...novoExame,
                nome: event.target.value
              })
            }
          />

          <input
            type="date"
            value={novoExame.data}
            onChange={(event) =>
              setNovoExame({
                ...novoExame,
                data: event.target.value
              })
            }
          />

          <select
            value={novoExame.status}
            onChange={(event) =>
              setNovoExame({
                ...novoExame,
                status: event.target.value
              })
            }
          >
            <option value="Em análise">
              Em análise
            </option>

            <option value="Disponível">
              Disponível
            </option>
          </select>

          <div className="botoes-formulario">
            <button type="submit">
              ✓ Adicionar
            </button>

            <button
              type="button"
              className="botao-cancelar"
              onClick={() => setMostrarFormulario(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      {/* TABELA */}
      <div className="tabela-exames">

        <div className="linha-tabela cabecalho-tabela">
          <strong>Exame</strong>
          <strong>Data</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </div>

        {exames.map((exame, index) => (
          <div className="linha-tabela" key={index}>

            <span className="nome-exame">
              {exame.nome}
            </span>

            <span>
              {exame.data}
            </span>

            <span
              className={
                exame.status === "Disponível"
                  ? "status pronto"
                  : "status analise"
              }
            >
              {exame.status === "Disponível"
                ? "✓ "
                : "⏳ "}

              {exame.status}
            </span>

            <button
              className={
                exame.status === "Disponível"
                  ? "botao-ver"
                  : "botao-aguardar"
              }
            >
              {exame.status === "Disponível"
                ? "👁 Ver"
                : "⏳ Aguardar"}
            </button>

          </div>
        ))}

      </div>

      {/* CARD DE SEGURANÇA */}
      <div className="aviso-exames">
        <div className="aviso-icone">
          💙
        </div>

        <div>
          <h3>Seus dados estão protegidos</h3>

          <p>
            Seus exames e informações médicas são mantidos em um
            ambiente seguro.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Exames;