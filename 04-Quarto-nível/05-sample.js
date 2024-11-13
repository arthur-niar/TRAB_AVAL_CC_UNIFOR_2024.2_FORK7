async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}/`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }
        const personagem = await resposta.json();
        return personagem;
    } catch (error) {
        console.error("Ocorreu um erro ao buscar o personagem:", error.message);
    }
    return null;
}

async function verDados(id) {
    const personagem = await buscarPersonagem(id);
    if (personagem) {
        console.log(personagem.name);
    }
}

verDados(1);
