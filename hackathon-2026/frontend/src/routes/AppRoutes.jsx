
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import MainLayout from "../Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Layout/DashboardLayout";

// Páginas provisórias
import Home from "../pages/home/Home"
import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
const Dashboard = () => <h1>Visão Geral</h1>;
const Medicamentos = () => <h1>Medicamentos</h1>;
const Consultas = () => <h1>Consultas</h1>;
const Exames = () => <h1>Exames</h1>;
const Doacao = () => <h1>Doação</h1>;

export default function AppRoutes() {
    return (
        <Routes>

            {/* Páginas públicas */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            {/* Autenticação */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Route>

            {/* Páginas privadas */}
            <Route element={<PrivateRoute />}>
                <Route element={<DashboardLayout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/medicamentos" element={<Medicamentos />} />
                    <Route path="/consultas" element={<Consultas />} />
                    <Route path="/exames" element={<Exames />} />
                    <Route path="/doacao" element={<Doacao />} />
                </Route>
            </Route>

            <Route path="*" element={<h1>404 - Página não encontrada</h1>} />

        </Routes>
    );
}
