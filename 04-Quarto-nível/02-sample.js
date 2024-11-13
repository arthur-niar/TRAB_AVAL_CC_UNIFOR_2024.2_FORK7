async function buscarFilme(id) {
    const url = `https://swapi.dev/api/films/${id}/`;
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Falha na requisição: ${resposta.status}`);
        }
        const filme = await resposta.json();
        return filme;
    } catch (error) {
        console.error("Erro ao buscar filme:", error.message);
    }
    return null;
}

async function nomeFilmeCaps(id) {
    const filme = await buscarFilme(id);
    if (filme) {
        console.log(filme.titulo.toUpperCase());
    }
}

nomeFilmeCaps(1);
