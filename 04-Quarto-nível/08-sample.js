async function buscarPlanetaRecursivo(id) {
    const url = `https://swapi.dev/api/planets/${id}/`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }

        const planeta = await resposta.json();
        return planeta;
    } catch (error) {
        console.error(`Erro ao buscar planeta: ${error.message}`);
    }
    return null;
}

async function verDados(id) {
    const planeta = await buscarPlanetaRecursivo(id);
    if (planeta) {
        console.log(planeta.name);
    }
}
const ADD = 1;
verDados(1 + ADD); // não sei se era proposital mas coloquei aqui
