
const API_URL = "http://localhost:3000/auth";

async function request(endpoint, dados) {
    const response = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Erro na autenticação");
    }

    return data;
}

export function loginRequest(email, password) {
    return request("login", { email, password });
}

export function registerRequest(dadosUsuario) {
    return request("registrar", dadosUsuario);
}
