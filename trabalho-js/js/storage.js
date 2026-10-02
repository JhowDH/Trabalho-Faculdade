export function salvarUsuario(usuario) {
    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );
}

export function buscarUsuario() {
    const dados = localStorage.getItem("usuario");

    if (!dados) {
        return null;
    }

    return JSON.parse(dados);
}

export function removerUsuario() {
    localStorage.removeItem("usuario");
}