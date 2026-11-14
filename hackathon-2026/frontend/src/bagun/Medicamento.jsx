import { useState } from "react";
import "./Medicamento.css";

function Medicamentos() {
  const [remedios, setRemedios] = useState([
    {
      nome: "Vitamina D",
      horario: "08:00",
      quantidade: "1 comprimido",
      tomado: false
    },
    {
      nome: "Medicamento",
      horario: "12:00",
      quantidade: "1 comprimido",
      tomado: false
    },
    {
      nome: "Vitamina",
      horario: "20:00",
      quantidade: "1 cápsula",
      tomado: false
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [novoRemedio, setNovoRemedio] = useState({
    nome: "",
    horario: "",
    quantidade: ""
  });

  function marcarTomado(index) {
    setRemedios(
      remedios.map((remedio, indice) => {
        if (indice === index) {
          return {
            ...remedio,
            tomado: !remedio.tomado
          };
        }

        return remedio;
      })
    );
  }

  function adicionarMedicamento(event) {
    event.preventDefault();

    if (
      !novoRemedio.nome ||
      !novoRemedio.horario ||
      !novoRemedio.quantidade
    ) {
      alert("⚠️ Preencha todos os campos!");
      return;
    }

    const remedioParaAdicionar = {
      ...novoRemedio,
      tomado: false
    };

    setRemedios((listaAtual) => [
      ...listaAtual,
      remedioParaAdicionar
    ]);

    setNovoRemedio({
      nome: "",
      horario: "",
      quantidade: ""
    });

    setMostrarFormulario(false);
  }

  const quantidadeTomada = remedios.filter(
    (remedio) => remedio.tomado
  ).length;

  const porcentagem =
    remedios.length > 0
      ? Math.round((quantidadeTomada / remedios.length) * 100)
      : 0;

  return (
    <div className="pagina-tela">
      <div className="titulo-pagina">
        <div>
          <p>CONTROLE DE SAÚDE</p>
          <h1>💊 Meus Medicamentos</h1>
          <span>
            Organize seus remédios e acompanhe seus horários.
          </span>
        </div>

        <button
          className="botao-principal"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          {mostrarFormulario
            ? "✕ Fechar"
            : "+ Adicionar medicamento"}
        </button>
      </div>

      {mostrarFormulario && (
        <div className="area-adicionar-medicamento">
          <form
            className="formulario-medicamento"
            onSubmit={adicionarMedicamento}
          >
            <h2>💊 Adicionar medicamento</h2>

            <div className="campos-medicamento">
              <div className="campo-medicamento">
                <label>Nome do medicamento</label>

                <input
                  type="text"
                  placeholder="Ex: Vitamina C"
                  value={novoRemedio.nome}
                  onChange={(event) =>
                    setNovoRemedio({
                      ...novoRemedio,
                      nome: event.target.value
                    })
                  }
                />
              </div>

              <div className="campo-medicamento">
                <label>Horário</label>

                <input
                  type="time"
                  value={novoRemedio.horario}
                  onChange={(event) =>
                    setNovoRemedio({
                      ...novoRemedio,
                      horario: event.target.value
                    })
                  }
                />
              </div>

              <div className="campo-medicamento">
                <label>Quantidade</label>

                <input
                  type="text"
                  placeholder="Ex: 1 comprimido"
                  value={novoRemedio.quantidade}
                  onChange={(event) =>
                    setNovoRemedio({
                      ...novoRemedio,
                      quantidade: event.target.value
                    })
                  }
                />
              </div>
            </div>

            <div className="botoes-medicamento">
              <button
                type="submit"
                className="botao-tomar"
              >
                ✓ Adicionar medicamento
              </button>

              <button
                type="button"
                className="botao-cancelar"
                onClick={() => setMostrarFormulario(false)}
              >
                ✕ Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="resumo-medicamentos">
        <div className="resumo-texto">
          <div className="resumo-informacoes">
            <div className="resumo-icone">
              💊
            </div>

            <div>
              <h2>Seu progresso de hoje</h2>

              <p>
                {quantidadeTomada} de {remedios.length} medicamentos tomados
              </p>
            </div>
          </div>

          <span className="porcentagem">
            {porcentagem}%
          </span>
        </div>

        <div className="barra-progresso">
          <div
            className="progresso-preenchido"
            style={{ width: `${porcentagem}%` }}
          />
        </div>

        {quantidadeTomada === remedios.length && remedios.length > 0 && (
          <div className="mensagem-sucesso">
            <span>🎉</span>
            Parabéns! Você tomou todos os medicamentos!
          </div>
        )}
      </div>

      <div className="lista-completa">
        {remedios.map((remedio, index) => (
          <div
            className={`item-medicamento ${
              remedio.tomado ? "tomado" : ""
            }`}
            key={`${remedio.nome}-${index}`}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="horario-grande">
              🕐 {remedio.horario}
            </div>

            <div className="info-remedio">
              <div className="nome-remedio">
                <h3>{remedio.nome}</h3>

                {remedio.tomado && (
                  <span className="status-tomado">
                    ✓ Tomado
                  </span>
                )}
              </div>

              <p>{remedio.quantidade}</p>
            </div>

            <button
              className={`botao-tomar ${
                remedio.tomado ? "tomado-botao" : ""
              }`}
              onClick={() => marcarTomado(index)}
            >
              <span className="icone-botao">
                {remedio.tomado ? "✓" : "💊"}
              </span>

              {remedio.tomado
                ? "Tomado"
                : "Marcar como tomado"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicamentos;