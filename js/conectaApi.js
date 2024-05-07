async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaProduto(nome, valor, imagem, id) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem,
            id: id
        })
    });

    if(!conexao.ok) {
        throw new Error("Não foi possível adicionar o vídeo.");
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criaProduto,
    deletaProduto
}
