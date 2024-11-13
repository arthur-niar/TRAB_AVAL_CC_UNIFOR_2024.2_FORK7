const lukeId = 1;
async function buscarPersonagem(id) {
    const url = `https://swapi.dev/api/people/${id}/%%%`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }
        const personagem = await resposta.json();
        return personagem;
    } catch (error) {
        console.error(
            `Ocorreu um erro ao buscar o personagem: ${error.message}`
        );
    }
    return null;
}

async function verPersonagem(id) {
    const personagem = await buscarPersonagem(id);
    try {
        if (id === null || id === undefined) {
            throw new Error(
                "Erro ao buscar personagem. Oops! Algo deu errado."
            );
        }
        if (personagem) {
            console.log(personagem.name);
        }
        throw new Error("Número de ID não existente...");
    } catch (error) {
        console.error(error.message, error);
    }
}

verPersonagem(lukeId);
