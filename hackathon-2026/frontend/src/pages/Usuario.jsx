
import { useState } from "react";
import "../css/Usuario.css";

function Usuario({ voltar, sair }) {
  // Controla se os campos estão em modo de edição
  const [editando, setEditando] = useState(false);

  // Guarda as informações do usuário
  const [usuario, setUsuario] = useState({
    nome: "Usuária",
    cpf: "000.000.000-00",
    telefone: "(00) 00000-0000",
    email: "usuario@email.com",
    senha: "123456"
  });

  // Atualiza as informações dos campos
  function alterarInformacao(event) {
    const { name, value } = event.target;

    setUsuario({
      ...usuario,
      [name]: value
    });
  }

  // Salva as alterações
  function salvarAlteracoes() {
    setEditando(false);
    alert("Informações atualizadas com sucesso! 💚");
  }

  // Exclui a conta
  function excluirConta() {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir sua conta? Esta ação não poderá ser desfeita."
    );

    if (confirmar) {
      alert("Sua conta foi excluída.");

      // Vai para a tela de login
      if (sair) {
        sair();
      }
    }
  }

  // Sai da conta
  function sairDaConta() {
    const confirmar = window.confirm(
      "Tem certeza que deseja sair da sua conta?"
    );

    if (confirmar) {
      // Vai para a tela de login
      if (sair) {
        sair();
      }
    }
  }

  return (
    <div className="pagina-usuario">

      {/* BOTÃO VOLTAR */}
      <button
        className="botao-voltar"
        onClick={voltar}
      >
        ← Voltar para o início
      </button>

      <div className="perfil-card">

        {/* TOPO DO PERFIL */}
        <div className="perfil-topo">
          <div className="avatar-grande">👩</div>

          <div>
            <h1>Meu Perfil</h1>
            <p>Gerencie suas informações pessoais.</p>
          </div>
        </div>

        {/* DADOS DO USUÁRIO */}
        <div className="dados-perfil">

          <div className="campo">
            <label>👤 Nome</label>
            <input
              type="text"
              name="nome"
              value={usuario.nome}
              onChange={alterarInformacao}
              disabled={!editando}
            />
          </div>

          <div className="campo">
            <label>🪪 CPF</label>
            <input
              type="text"
              name="cpf"
              value={usuario.cpf}
              onChange={alterarInformacao}
              disabled={!editando}
            />
          </div>

          <div className="campo">
            <label>📱 Telefone</label>
            <input
              type="text"
              name="telefone"
              value={usuario.telefone}
              onChange={alterarInformacao}
              disabled={!editando}
            />
          </div>

          <div className="campo">
            <label>📧 E-mail</label>
            <input
              type="email"
              name="email"
              value={usuario.email}
              onChange={alterarInformacao}
              disabled={!editando}
            />
          </div>

          <div className="campo">
            <label>🔒 Senha</label>
            <input
              type="password"
              name="senha"
              value={usuario.senha}
              onChange={alterarInformacao}
              disabled={!editando}
            />
          </div>

        </div>

        {/* BOTÕES */}
        <div className="acoes-usuario">

          {!editando ? (
            <button
              className="botao-editar"
              onClick={() => setEditando(true)}
            >
              ✏️ Editar informações
            </button>
          ) : (
            <button
              className="botao-salvar"
              onClick={salvarAlteracoes}
            >
              💾 Salvar alterações
            </button>
          )}

          <button
            className="botao-sair"
            onClick={sairDaConta}
          >
            🚪 Sair da conta
          </button>

          <button
            className="botao-excluir"
            onClick={excluirConta}
          >
            🗑️ Excluir conta
          </button>

        </div>

      </div>
    </div>
  );
}

export default Usuario;
