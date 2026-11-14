
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../style/Auth.css";
import { useAuth } from "../../contexts/AuthContext";
import { loginRequest } from "../../services/authService";


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { setSession } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        setLoading(true);
        setError("");

        try {
            const data = await loginRequest(email, password);

            setSession(data.user, data.token);
            navigate("/home");
        } catch (error) {
            setError(error.message || "Erro ao realizar login.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-decoration decoration-one" />
            <div className="auth-decoration decoration-two" />

            <section className="auth-card">

                <div className="auth-brand">
                    <div className="brand-icon">✚</div>
                    <span>Conecta<span>Saúde</span></span>
                </div>

                <div className="auth-heading">
                    <span className="auth-eyebrow">BEM-VINDO DE VOLTA</span>
                    <h1>Que bom ter você aqui!</h1>
                    <p>
                        Entre na sua conta e acompanhe seus cuidados
                        com a saúde em um só lugar.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="auth-form">

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="seuemail@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>

                        <div className="password-wrapper">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
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

                    <button type="submit" className="auth-submit">
                        Entrar na minha conta
                        <span>→</span>
                    </button>

                </form>

                <div className="auth-divider">
                    <span>OU</span>
                </div>

                <p className="auth-switch">
                    Ainda não possui uma conta?
                    <Link to="/cadastro"> Criar conta</Link>
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
