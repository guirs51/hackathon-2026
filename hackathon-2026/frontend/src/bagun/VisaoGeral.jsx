import "./VisaoGeral.css";

function VisaoGeral({ mudarTela }) {
  return (
    <div className="pagina-tela visao-geral">
      <div className="decoracao-fundo decoracao-cruz-1">✚</div>
      <div className="decoracao-fundo decoracao-cruz-2">✚</div>
      <div className="decoracao-fundo decoracao-coracao-1">♥</div>
      <div className="decoracao-fundo decoracao-ponto-1"></div>
      <div className="decoracao-fundo decoracao-ponto-2"></div>
      <div className="decoracao-fundo decoracao-circulo-1"></div>
      <div className="decoracao-fundo decoracao-circulo-2"></div>

      <section className="boas-vindas">
        <div className="conteudo-boas-vindas">
          <p className="pequeno-titulo">✦ SEU PAINEL DE SAÚDE</p>

          <h1>
            Olá! Como você está hoje?
            <span>💙</span>
          </h1>

          <p>
            Aqui você pode acompanhar seus medicamentos,
            consultas e informações importantes.
          </p>

          <button
            className="botao-principal"
            onClick={() => mudarTela("Medicamento")}
          >
            <span>💊</span>
            Ver meus medicamentos
            <strong>→</strong>
          </button>
        </div>

        <div className="ilustracao-saude">
          <div className="circulo-exterior"></div>
          <div className="circulo-interior"></div>

          <div className="circulo-medico">
            <span>❤️</span>
          </div>

          <span className="icone-flutuante icone1">💊</span>
          <span className="icone-flutuante icone2">✚</span>
          <span className="icone-flutuante icone3">🩺</span>
          <span className="icone-flutuante icone4">✦</span>

          <div className="particula particula1"></div>
          <div className="particula particula2"></div>
          <div className="particula particula3"></div>
        </div>
      </section>

      <div className="titulo-resumo">
        <div>
          <p>VISÃO RÁPIDA</p>
          <h2>Seu resumo de hoje</h2>
        </div>

        <span className="linha-titulo"></span>
      </div>

      <section className="cards-resumo">
        <div
          className="card-resumo azul"
          onClick={() => mudarTela("Medicamentos")}
        >
          <div className="decoracao-card">💊</div>

          <div className="card-icone">💊</div>

          <div>
            <p>Medicamentos</p>
            <h2>03</h2>
            <span>Para hoje</span>
          </div>

          <div className="seta-card">→</div>
        </div>

        <div
          className="card-resumo verde"
          onClick={() => mudarTela("Consultas")}
        >
          <div className="decoracao-card">📅</div>

          <div className="card-icone">📅</div>

          <div>
            <p>Próxima consulta</p>
            <h2>15</h2>
            <span>Novembro</span>
          </div>

          <div className="seta-card">→</div>
        </div>

        <div
          className="card-resumo roxo"
          onClick={() => mudarTela("Exames")}
        >
          <div className="decoracao-card">📄</div>

          <div className="card-icone">📄</div>

          <div>
            <p>Exames</p>
            <h2>05</h2>
            <span>Disponíveis</span>
          </div>

          <div className="seta-card">→</div>
        </div>

        <div
          className="card-resumo vermelho"
          onClick={() => mudarTela("Doação")}
        >
          <div className="decoracao-card">♥</div>

          <div className="card-icone">❤️</div>

          <div>
            <p>Doação</p>
            <h2>+</h2>
            <span>Doe e salve vidas!</span>
          </div>

          <div className="seta-card">→</div>
        </div>
      </section>
    </div>
  );
}

export default VisaoGeral;