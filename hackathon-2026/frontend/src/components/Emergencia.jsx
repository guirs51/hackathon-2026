
import { useState } from "react";
import "./Emergencia.css";

export default function Emergencia() {
    const [aberto, setAberto] = useState(false);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert(`Dados registrados!\nNome: ${nome}\nTelefone: ${telefone}`);

        setNome("");
        setTelefone("");
        setAberto(false);
    }

    return (
        <>
            <button
                className="emergencia"
                onClick={() => setAberto(true)}
            >
                <span>🚨</span>
                <div>
                    <strong>Emergência</strong>
                    <small>Toque para pedir ajuda</small>
                </div>
            </button>

            {aberto && (
                <div className="emergencia-overlay">
                    <div className="emergencia-modal">

                        <button
                            className="fechar-emergencia"
                            onClick={() => setAberto(false)}
                        >
                            ×
                        </button>

                        <h2>Cadastrar Familiar para Emergencia</h2>
                        <p>Informe os dados de um familiar.</p>

                        <form onSubmit={handleSubmit}>
                            <label>Nome</label>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />

                            <label>Telefone</label>
                            <input
                                type="tel"
                                placeholder="(00) 00000-0000"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                required
                            />

                            <button type="submit">
                                Confirmar
                            </button>
                        </form>

                    </div>
                </div>
            )}
        </>
    );
}
