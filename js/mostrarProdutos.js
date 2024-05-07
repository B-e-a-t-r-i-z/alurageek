import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, valor, imagem, id) {
    const produto = document.createElement("li");
    produto.className = "meus__produtos__card";
    produto.innerHTML = `
    <img class="meus__produtos__card__img" src="${imagem}" alt="Imagem do produto">
                        
    <div class="meus__produtos__card__info">
        <p>${nome}</p>

        <div class="meus__produtos__card__info__valor">
            <p>R$ ${valor}</p>
            <button type="button" class="meus__produtos__card__info__excluir" data-excluir>
            <img src="./assets/icone_lixeira.png" alt="Icone excluir">
            </button>
        </div>
    </div>`;

    const btnExcluir = produto.querySelector('.meus__produtos__card__info__excluir');

    btnExcluir.addEventListener('click', async () => {
        try {
            await conectaApi.deletaProduto(id);
            produto.remove();
        } catch (error) {
            console.error('Erro ao excluir produto: ', error);
        }
    });

    return produto;
}

async function listaProdutos() {
    try{
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id)));
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de produtos...</h2>`
    }
}

listaProdutos();
