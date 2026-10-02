import {
    paginaInicial,
    paginaCadastro,
    paginaSobre
} from "./components.js";

import { validarFormulario } from "./validation.js";


const rotas = {
    "": paginaInicial,
    "#cadastro": paginaCadastro,
    "#sobre": paginaSobre
};


export function renderizarRota() {

    const caminho = window.location.hash;

    const pagina = rotas[caminho] || paginaInicial;

    document.querySelector("#app").innerHTML = pagina();


    const formulario = document.querySelector("#formCadastro");

    if (formulario) {
        formulario.addEventListener(
            "submit",
            validarFormulario
        );
    }
}


window.addEventListener(
    "hashchange",
    renderizarRota
);