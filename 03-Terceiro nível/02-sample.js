async function buscarEFiltrarPessoas() {
    try {
        const urlPessoas = 'https://swapi.dev/api/people/';
        const letraFiltro = 'L';

        const resposta = await fetch(urlPessoas);
        const dados = await resposta.json();

        const pessoasComL = dados.results.filter(pessoa => pessoa.name.startsWith(letraFiltro));

        console.log('Pessoas cujo nome começa com L:');
        pessoasComL.forEach(pessoa => {
            console.log(pessoa.name);
        });

        console.log(`Total de pessoas encontradas: ${dados.results.length}`);

    } catch (erro) {
        console.error('Erro ao buscar pessoas:', erro);
    }
}

buscarEFiltrarPessoas();
