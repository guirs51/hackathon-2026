
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { registerRequest } from "../../services/authService";
import "../../style/Auth.css";

export default function Cadastro() {
    const navigate = useNavigate();
    const { setSession } = useAuth();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        nameUser: "",
        emailUser: "",
        cpfUser: "",
        dataNascimento: "",
        senharUser: "",
        endereco: "",
        filicao: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setLoading(true);
        setError("");

        try {
            const data = await registerRequest(formData);

            if (data.user && data.token) {
                setSession(data.user, data.token);
                navigate("/exames");
                return;
            }

            navigate("/login");
        } catch (error) {
            setError(error.message || "Erro ao realizar cadastro.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-decoration decoration-one" />
            <div className="auth-decoration decoration-two" />

            <section className="auth-card register-card">

                <div className="auth-brand">
                    <div className="brand-icon">✚</div>
                    <span>Conecta<span>Saúde</span></span>
                </div>

                <div className="auth-heading">
                    <span className="auth-eyebrow">FAÇA PARTE</span>
                    <h1>Crie sua conta</h1>
                    <p>
                        Preencha seus dados para começar a cuidar
                        melhor da sua saúde.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">

                    <h3 className="form-section-title">
                        <span>01</span> Dados pessoais
                    </h3>

                    <div className="form-group">
                        <label htmlFor="nameUser">Nome completo</label>
                        <input
                            id="nameUser"
                            name="nameUser"
                            type="text"
                            placeholder="Digite seu nome"
                            value={formData.nameUser}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="cpfUser">CPF</label>
                            <input
                                id="cpfUser"
                                name="cpfUser"
                                type="text"
                                placeholder="000.000.000-00"
                                value={formData.cpfUser}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="dataNascimento">
                                Data de nascimento
                            </label>
                            <input
                                id="dataNascimento"
                                name="dataNascimento"
                                type="date"
                                value={formData.dataNascimento}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input
                            id="endereco"
                            name="endereco"
                            type="text"
                            placeholder="Rua, número e bairro"
                            value={formData.endereco}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="filicao">Filiação</label>
                        <input
                            id="filicao"
                            name="filicao"
                            type="text"
                            placeholder="Nome da filiação"
                            value={formData.filicao}
                            onChange={handleChange}
                        />
                    </div>

                    <h3 className="form-section-title">
                        <span>02</span> Dados de acesso
                    </h3>

                    <div className="form-group">
                        <label htmlFor="emailUser">E-mail</label>
                        <input
                            id="emailUser"
                            name="emailUser"
                            type="email"
                            placeholder="seuemail@exemplo.com"
                            value={formData.emailUser}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senharUser">Senha</label>

                        <div className="password-wrapper">
                            <input
                                id="senharUser"
                                name="senharUser"
                                type={showPassword ? "text" : "password"}
                                placeholder="Crie uma senha"
                                value={formData.senharUser}
                                onChange={handleChange}
                                autoComplete="new-password"
                                required
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Ocultar" : "Mostrar"}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <p className="auth-error">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="auth-submit"
                        disabled={loading}
                    >
                        {loading ? "Criando conta..." : "Criar minha conta"}
                        {!loading && <span>→</span>}
                    </button>

                </form>

                <p className="auth-switch">
                    Já possui uma conta?
                    <Link to="/login"> Fazer login</Link>
                </p>

                <div className="auth-security">
                    <span>♧</span>
                    Seus dados são importantes. Cuide da sua saúde
                    com segurança.
                </div>

            </section>

            <footer className="auth-footer">
                Conecta Saúde © 2026 · Cuidar de você é nossa prioridade.
            </footer>
        </div>
    );
}
