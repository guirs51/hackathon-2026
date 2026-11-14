
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardLayout() {
    const { user, logout } = useAuth();

    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <h2>Conecta Saúde</h2>

                <nav>
                    <NavLink to="/dashboard">Visão Geral</NavLink>
                    <NavLink to="/medicamentos">Medicamentos</NavLink>
                    <NavLink to="/consultas">Consultas</NavLink>
                    <NavLink to="/exames">Exames</NavLink>
                    <NavLink to="/doacao">Doação</NavLink>
                </nav>

                <div className="sidebar-user">
                    <span>{user?.nameUser || "Usuário"}</span>
                    <button onClick={logout}>Sair</button>
                </div>
            </aside>

            <main className="dashboard-content">
                <Outlet />
            </main>
        </div>
    );
}
