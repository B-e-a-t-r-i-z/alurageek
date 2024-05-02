import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarProdutos.js";

async function deletaProduto(evento) {
    evento.preventDefault();

    const card = document.querySelector('[data-lista]').value;
    const cardParaDeletar = await conectaApi.deletaProduto(card);
    
    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    cardParaDeletar.forEach(elemento => lista.appendChild(constroiCard(elemento.id)));

};


const btn_excluir = document.querySelector('[data-nome]').value;

btn_excluir.addEventListener('click', evento => deletaProduto(evento));
