async function buscarEspecie(id) {
    const url = `https://swapi.dev/api/species/${id}/"`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }

        const especie = await resposta.json();
        return especie;
    } catch (error) {
        console.error(`Ocorreu um erro ao buscar a espécie: ${error.message}`);
    }
    return null;
}

async function verDados(id) {
    const especie = await buscarEspecie(id);
    if (especie) {
        console.log(especie.average_lifespan.toUpperCase());
    }
}

verDados(1);
