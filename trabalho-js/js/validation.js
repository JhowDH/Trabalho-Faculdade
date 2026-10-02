
import { salvarUsuario } from "./storage.js";

export function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    const erroNome = document.querySelector("#erroNome");
    const erroEmail = document.querySelector("#erroEmail");
    const erroSenha = document.querySelector("#erroSenha");
    const mensagem = document.querySelector("#mensagem");

    let formularioValido = true;

    // Limpa mensagens anteriores
    erroNome.textContent = "";
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    mensagem.textContent = "";
    mensagem.classList.remove("sucesso");

    // Remove estilos de erro
    nome.classList.remove("erro");
    email.classList.remove("erro");
    senha.classList.remove("erro");

    // Validação do nome
    if (nome.value.trim() === "") {
        erroNome.textContent = "Digite seu nome.";
        nome.classList.add("erro");
        formularioValido = false;
    }

    // Validação do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        erroEmail.textContent = "Digite seu e-mail.";
        email.classList.add("erro");
        formularioValido = false;
    } else if (!regexEmail.test(email.value.trim())) {
        erroEmail.textContent = "Digite um e-mail válido.";
        email.classList.add("erro");
        formularioValido = false;
    }

    // Validação da senha
    if (senha.value.length < 8) {
        erroSenha.textContent =
            "A senha deve ter pelo menos 8 caracteres.";

        senha.classList.add("erro");
        formularioValido = false;
    }

    // Cadastro válido
    if (formularioValido) {
        const usuario = {
            nome: nome.value.trim(),
            email: email.value.trim()
        };

        salvarUsuario(usuario);

        // Biblioteca SweetAlert2
        Swal.fire({
            icon: "success",
            title: "Cadastro realizado!",
            text: `Seja bem-vindo, ${usuario.nome}!`,
            confirmButtonText: "Continuar",
            confirmButtonColor: "#1f5f8b"
        });

        // Atualiza os dados exibidos na página
        const usuarioSalvo =
            document.querySelector("#usuarioSalvo");

        if (usuarioSalvo) {
            usuarioSalvo.innerHTML = `
                <div class="usuario-salvo">
                    <h3>Usuário cadastrado</h3>
                    <p>
                        <strong>Nome:</strong>
                        ${usuario.nome}
                    </p>
                    <p>
                        <strong>E-mail:</strong>
                        ${usuario.email}
                    </p>
                </div>
            `;
        }

        // Limpa os campos após o cadastro
        nome.value = "";
        email.value = "";
        senha.value = "";
    }
}