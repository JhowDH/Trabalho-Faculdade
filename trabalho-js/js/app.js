
import { renderizarRota } from "./router.js";

document.addEventListener("DOMContentLoaded", () => {

    // Renderiza a página inicial
    renderizarRota();

    // Gerencia os cliques da aplicação
    document.addEventListener("click", (event) => {

        // Navegação entre páginas
        const link = event.target.closest("[data-link]");

        if (link) {
            event.preventDefault();

            const destino = new URL(
                link.href,
                window.location.href
            );

            // Atualiza a rota somente se ela for diferente
            if (window.location.hash !== destino.hash) {
                window.location.hash = destino.hash;
            } else {
                renderizarRota();
            }

            return;
        }

        // Botão para mostrar ou ocultar a senha
        const botaoSenha = event.target.closest("#mostrarSenha");

        if (botaoSenha) {
            const campoSenha = document.querySelector("#senha");

            if (!campoSenha) return;

            const mostrarSenha = campoSenha.type === "password";

            campoSenha.type = mostrarSenha ? "text" : "password";

            botaoSenha.textContent = mostrarSenha ? "🙈" : "👁️";

            botaoSenha.setAttribute(
                "aria-label",
                mostrarSenha ? "Ocultar senha" : "Mostrar senha"
            );
        }
    });
});