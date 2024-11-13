async function buscarNave(id) {
    const url = `https://swapi.dev/api/starships/${id}/`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }
        const nave = await resposta.json();
        return nave;
    } catch (error) {
        console.error(`Ocorreu um erro ao buscar a nave: ${error.message}`);
    }
    return null;
}

async function verDados(id) {
    const nave = await buscarNave(id);
    if (nave) {
        console.log(nave.name);
    }
}

verDados(1);
