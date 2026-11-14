
import { useState } from "react";
import "../css/consulta.css";

function Consultas() {
  const [consultas, setConsultas] = useState([
    {
      titulo: "Consulta médica",
      data: "2026-11-15",
      horario: "14:30",
      local: "Local a confirmar"
    },
    {
      titulo: "Retorno médico",
      data: "2026-11-22",
      horario: "10:00",
      local: "Clínica"
    }
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [novaConsulta, setNovaConsulta] = useState({
    titulo: "",
    data: "",
    horario: "",
    local: ""
  });

  function agendarConsulta(event) {
    event.preventDefault();

    if (
      !novaConsulta.titulo ||
      !novaConsulta.data ||
      !novaConsulta.horario ||
      !novaConsulta.local
    ) {
      alert("⚠️ Preencha todos os campos!");
      return;
    }

    setConsultas((consultasAtuais) => [
      ...consultasAtuais,
      novaConsulta
    ]);

    setNovaConsulta({
      titulo: "",
      data: "",
      horario: "",
      local: ""
    });

    setMostrarFormulario(false);

    alert("✅ Consulta agendada com sucesso!");
  }

  function formatarData(data) {
    const [ano, mes, dia] = data.split("-");

    const meses = [
      "JAN",
      "FEV",
      "MAR",
      "ABR",
      "MAI",
      "JUN",
      "JUL",
      "AGO",
      "SET",
      "OUT",
      "NOV",
      "DEZ"
    ];

    return {
      dia,
      mes: meses[Number(mes) - 1],
      completa: `${dia}/${mes}/${ano}`
    };
  }

  return (
    <div className="pagina-tela">
      <div className="titulo-pagina">
        <div>
          <p className="titulo-pequeno">AGENDA DE SAÚDE</p>

          <h1>📅 Historico de Consultas</h1>

          <span>
            Acompanhe e agende seus compromissos médicos.
          </span>
        </div>

        <button
          className={`botao-principal ${
            mostrarFormulario ? "botao-ativo" : ""
          }`}
          onClick={() =>
            setMostrarFormulario((estadoAtual) => !estadoAtual)
          }
        >
          {mostrarFormulario ? "✕ Fechar" : "+ Nova consulta"}
        </button>
      </div>

      {mostrarFormulario && (
        <div className="area-agendamento">
          <form
            className="formulario-consulta"
            onSubmit={agendarConsulta}
          >
            <span className="decoracao decoracao-um">✦</span>
            <span className="decoracao decoracao-dois">♥</span>

            <div className="titulo-agendamento">
              <div className="icone-agendamento">
                📅
              </div>

              <div className="texto-agendamento">
                <h2>Agendar nova consulta</h2>

                <p>
                  Preencha as informações abaixo para adicionar
                  um novo compromisso à sua agenda.
                </p>
              </div>
            </div>

            <div className="subtitulo-formulario">
              <span className="icone-subtitulo">📝</span>

              <div>
                <h3>Informações da consulta</h3>

                <p>
                  Complete todos os campos para realizar
                  o agendamento.
                </p>
              </div>
            </div>

            <div className="campos-consulta">
              <div className="campo-consulta">
                <label htmlFor="tipo">
                  🩺 Tipo da consulta
                </label>

                <input
                  id="tipo"
                  type="text"
                  placeholder="Ex: Consulta médica"
                  value={novaConsulta.titulo}
                  onChange={(event) =>
                    setNovaConsulta({
                      ...novaConsulta,
                      titulo: event.target.value
                    })
                  }
                />
              </div>

              <div className="campo-consulta">
                <label htmlFor="data">
                  📅 Data
                </label>

                <input
                  id="data"
                  type="date"
                  value={novaConsulta.data}
                  onChange={(event) =>
                    setNovaConsulta({
                      ...novaConsulta,
                      data: event.target.value
                    })
                  }
                />
              </div>

              <div className="campo-consulta">
                <label htmlFor="horario">
                  🕐 Horário
                </label>

                <input
                  id="horario"
                  type="time"
                  value={novaConsulta.horario}
                  onChange={(event) =>
                    setNovaConsulta({
                      ...novaConsulta,
                      horario: event.target.value
                    })
                  }
                />
              </div>

              <div className="campo-consulta">
                <label htmlFor="local">
                  📍 Local da consulta
                </label>

                <input
                  id="local"
                  type="text"
                  placeholder="Ex: Clínica ou hospital"
                  value={novaConsulta.local}
                  onChange={(event) =>
                    setNovaConsulta({
                      ...novaConsulta,
                      local: event.target.value
                    })
                  }
                />
              </div>
            </div>

            <div className="botoes-formulario">
              <button
                type="submit"
                className="botao-agendar"
              >
                <span>✓</span>
                Agendar consulta
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

      <div className="cards-consultas">
        {consultas.map((consulta, index) => {
          const dataFormatada = formatarData(consulta.data);

          return (
            <div
              className="consulta-card"
              key={`${consulta.data}-${index}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="data-consulta">
                <strong>
                  {dataFormatada.dia}
                </strong>

                <span>
                  {dataFormatada.mes}
                </span>
              </div>

              <div className="consulta-informacoes">
                <h2>
                  {consulta.titulo}
                </h2>

                <div className="detalhes-consulta">
                  <p>
                    📅 {dataFormatada.completa}
                  </p>

                  <p>
                    🕐 {consulta.horario}
                  </p>

                  <p>
                    📍 {consulta.local}
                  </p>
                </div>
              </div>

              <button
                className="botao-detalhes"
                type="button"
              >
                Ver detalhes →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Consultas;
