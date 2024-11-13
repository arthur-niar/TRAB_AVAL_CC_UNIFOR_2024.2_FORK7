async function buscarDados() {
    const dados = `{"name": "Luke", "idade": 23}`;
    const formato = JSON.parse(dados);
    return formato;
}

async function verDados() {
    const personagem = await buscarDados();
    if (personagem) {
        console.log(personagem.name);
    }
}

verDados();
