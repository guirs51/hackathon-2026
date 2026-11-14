
import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="main-layout">
            <header>
                <Link to="/">Conecta Saúde</Link>

                <nav>
                    <Link to="/login">Entrar</Link>
                    <Link to="/cadastro">Cadastrar</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Conecta Saúde © 2026</p>
            </footer>
        </div>
    );
}
