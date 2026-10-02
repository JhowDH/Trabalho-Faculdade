export function paginaInicial() {
    return `
        <section class="card">
            <h2>Bem-vindo!</h2>

            <p>
                Esta é a página inicial da aplicação.
            </p>

            <p>
                O conteúdo desta área é carregado
                dinamicamente pelo JavaScript.
            </p>
        </section>
    `;
}


export function paginaCadastro() {
    return `
        <section class="card">

            <h2>Cadastro de usuário</h2>

            <form id="formCadastro">

                <div class="campo">
                    <label for="nome">Nome</label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                    >

                    <small id="erroNome"></small>
                </div>


                <div class="campo">
                    <label for="email">E-mail</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                    >

                    <small id="erroEmail"></small>
                </div>


              <div class="campo">
    <label for="senha">Senha</label>

    <div class="campo-senha">

        <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
        >

        <button
            type="button"
            id="mostrarSenha"
            class="botao-senha"
            aria-label="Mostrar senha"
        >
            👁️
        </button>

    </div>

    <small id="erroSenha"></small>
</div>


                <button type="submit">
                    Cadastrar
                </button>


                <div id="mensagem"></div>

            </form>

        </section>
    `;
}


export function paginaSobre() {
    return `
        <section class="card">

            <h2>Sobre</h2>

            <p>
                Esta aplicação foi desenvolvida utilizando
                HTML, CSS e JavaScript.
            </p>

            <p>
                O projeto utiliza navegação SPA,
                templates dinâmicos e validação de formulários.
            </p>

        </section>
    `;
}