import "./Doacao.css";
function Doacao() {
    return (
      <div className="pagina-tela">
  
        <div className="doacao-destaque">
          <div>
            <p>DOE SANGUE. SALVE VIDAS. ❤️</p>
  
            <h1>🩸 Doação de Sangue</h1>
  
            <span>
              Uma única doação pode ajudar várias pessoas.
              Encontre informações e organize sua doação.
            </span>
  
            <button className="botao-doar">
              Quero ser doador ❤️
            </button>
          </div>
  
          <div className="gota-sangue">
            🩸
          </div>
        </div>
  
        <h2 className="subtitulo">
          Hemocentros
        </h2>
  
        <div className="hemocentros">
  
          <div className="hemocentro-card">
            <span>🏥</span>
            <h3>Hemocentro Central</h3>
            <p>📍 Consulte a localização</p>
            <p>🕐 Segunda a Sexta</p>
  
            <button>
              Ver informações
            </button>
          </div>
  
          <div className="hemocentro-card">
            <span>🏥</span>
            <h3>Unidade de Doação</h3>
            <p>📍 Consulte a localização</p>
            <p>🕐 Horário comercial</p>
  
            <button>
              Ver informações
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Doacao;