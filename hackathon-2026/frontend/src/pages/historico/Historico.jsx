import { useState } from "react";
import "../css/Historico.css";

function Historico() {
  // Informações do histórico de saúde
  const [historico, setHistorico] = useState({
    historicoFamiliar: "Não informado",
    doenca: "Não informado",
    queixa: "Não informado",
    alergia: "Não informado",
    dependenciaQuimica: "Não informado"
  });

  // Controla se o formulário está aberto
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Guarda as informações digitadas
  const [novoHistorico, setNovoHistorico] = useState({
    historicoFamiliar: "",
    doenca: "",
    queixa: "",
    alergia: "",
    dependenciaQuimica: ""
  });

  // Atualiza os campos do formulário
  function atualizarCampo(event) {
    const { name, value } = event.target;

    setNovoHistorico({
      ...novoHistorico,
      [name]: value
    });
  }

  // Salva as informações
  function salvarHistorico(event) {
    event.preventDefault();

    setHistorico({
      historicoFamiliar:
        novoHistorico.historicoFamiliar || "Não informado",
      doenca: novoHistorico.doenca || "Não informado",
      queixa: novoHistorico.queixa || "Não informado",
      alergia: novoHistorico.alergia || "Não informado",
      dependenciaQuimica:
        novoHistorico.dependenciaQuimica || "Não informado"
    });

    // Limpa o formulário
    setNovoHistorico({
      historicoFamiliar: "",
      doenca: "",
      queixa: "",
      alergia: "",
      dependenciaQuimica: ""
    });

    // Fecha o formulário
    setMostrarFormulario(false);

    alert("Histórico médico atualizado com sucesso! 🩺💙");
  }

  return (
    <div className="pagina-historico">

      {/* CABEÇALHO */}
      <div className="cabecalho-historico">
        <div className="icone-historico-principal">📋</div>

        <div>
          <p className="historico-pequeno-titulo">
            SUAS INFORMAÇÕES DE SAÚDE
          </p>

          <h1>Histórico Médico</h1>

          <p>
            Consulte suas informações e registros importantes de saúde.
          </p>
        </div>
      </div>

      {/* BARRA PARA ADICIONAR */}
      <button
        className="barra-adicionar-historico"
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
      >
        <div className="barra-adicionar-icone">
          {mostrarFormulario ? "✕" : "+"}
        </div>

        <div className="barra-adicionar-texto">
          <strong>
            {mostrarFormulario
              ? "Fechar formulário"
              : "Adicionar informações ao histórico"}
          </strong>

          <span>
            Clique aqui para adicionar ou atualizar suas informações de saúde.
          </span>
        </div>

        <span className="seta-adicionar">
          {mostrarFormulario ? "▲" : "▼"}
        </span>
      </button>

      {/* FORMULÁRIO */}
      {mostrarFormulario && (
        <section className="formulario-historico">
          <div className="formulario-titulo">
            <span>🩺</span>

            <div>
              <h2>Adicionar informações</h2>
              <p>Preencha os campos que desejar atualizar.</p>
            </div>
          </div>

          <form onSubmit={salvarHistorico}>
            <div className="campos-historico">

              <div className="campo-historico">
                <label>👨‍👩‍👧 Histórico familiar</label>
                <input
                  type="text"
                  name="historicoFamiliar"
                  placeholder="Ex.: Diabetes na família"
                  value={novoHistorico.historicoFamiliar}
                  onChange={atualizarCampo}
                />
              </div>

              <div className="campo-historico">
                <label>🩺 Doença</label>
                <input
                  type="text"
                  name="doenca"
                  placeholder="Informe alguma doença"
                  value={novoHistorico.doenca}
                  onChange={atualizarCampo}
                />
              </div>

              <div className="campo-historico">
                <label>💬 Queixa</label>
                <input
                  type="text"
                  name="queixa"
                  placeholder="Descreva sua queixa"
                  value={novoHistorico.queixa}
                  onChange={atualizarCampo}
                />
              </div>

              <div className="campo-historico">
                <label>⚠️ Alergia</label>
                <input
                  type="text"
                  name="alergia"
                  placeholder="Ex.: Alergia a medicamentos"
                  value={novoHistorico.alergia}
                  onChange={atualizarCampo}
                />
              </div>

              <div className="campo-historico">
                <label>🧪 Dependência química</label>
                <input
                  type="text"
                  name="dependenciaQuimica"
                  placeholder="Informe se houver"
                  value={novoHistorico.dependenciaQuimica}
                  onChange={atualizarCampo}
                />
              </div>

            </div>

            <div className="botoes-formulario-historico">
              <button
                type="button"
                className="botao-cancelar-historico"
                onClick={() => setMostrarFormulario(false)}
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="botao-salvar-historico"
              >
                💙 Salvar histórico
              </button>
            </div>
          </form>
        </section>
      )}

      {/* CARD PRINCIPAL */}
      <section className="card-historico-saude">

        <div className="titulo-card-historico">
          <div className="icone-titulo-historico">🩺</div>

          <div>
            <h2>Histórico de Saúde</h2>
            <p>Informações importantes sobre sua saúde.</p>
          </div>
        </div>

        <div className="informacoes-historico">

          <div className="informacao-historico">
            <div className="icone-informacao">👨‍👩‍👧</div>

            <div>
              <span>Histórico familiar</span>
              <strong>{historico.historicoFamiliar}</strong>
            </div>
          </div>

          <div className="informacao-historico">
            <div className="icone-informacao">🩺</div>

            <div>
              <span>Doença</span>
              <strong>{historico.doenca}</strong>
            </div>
          </div>

          <div className="informacao-historico">
            <div className="icone-informacao">💬</div>

            <div>
              <span>Queixa</span>
              <strong>{historico.queixa}</strong>
            </div>
          </div>

          <div className="informacao-historico">
            <div className="icone-informacao">⚠️</div>

            <div>
              <span>Alergia</span>
              <strong>{historico.alergia}</strong>
            </div>
          </div>

          <div className="informacao-historico">
            <div className="icone-informacao">🧪</div>

            <div>
              <span>Dependência química</span>
              <strong>{historico.dependenciaQuimica}</strong>
            </div>
          </div>

        </div>
      </section>

      {/* ÁREA DE PRESCRIÇÕES */}
      <section className="card-prescricoes">

        <div className="titulo-card-historico">
          <div className="icone-titulo-historico">📄</div>

          <div>
            <h2>Prescrições e Atendimentos</h2>
            <p>Acompanhe seus registros médicos e prescrições.</p>
          </div>
        </div>

        <div className="prescricao-vazia">
          <span>🩺</span>
          <h3>Nenhuma prescrição disponível</h3>
          <p>
            Quando uma prescrição for registrada, ela aparecerá aqui.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Historico;