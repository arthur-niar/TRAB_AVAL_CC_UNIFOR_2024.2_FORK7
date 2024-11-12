const fs = require("fs");

function totalItems() {
    //Dá uma tabela de valores e primeiro multiplica-os por 3, depois soma na váriavel total.
    const TAB_NUM = [5, 7, 9, 11, 10, 20, 30, 40, 50];
    let total = 0;
    const MULT_TRES = 3;

    try {
        if (TAB_NUM.length === 0) {
            throw new Error("Erro: a tabela não pode estar vazia.");
        }

        for (let i = 0; i < TAB_NUM.length; i++) {
            total += TAB_NUM[i] * MULT_TRES;
        }

        console.log("O total é:", total);
    } catch (e) {
        console.log(e.message);
    }
}

function checarAtividade(usuario) {
    //Recebe o usuário Joao, verifica se ele é ativo.
    const USER_J = usuario;
    try {
        if (USER_J.ativo === true) {
            console.log("Usuário está ativo");
        } else {
            console.log("Usuário não está ativo");
        }
    } catch (error) {
        console.log(`Erro: alguma coisa deu errado. ${error}`);
    }
}

function verificarUsuario() {
    const VERIFIC_1 = true;
    const VERIFIC_2 = true;
    try {
        if (VERIFIC_1 && VERIFIC_2) {
            console.log("Usuário verificado!");
        } else {
            throw new Error(
                "Verificação falhou, tente recomeçar os passos de segurança."
            );
        }
    } catch (error) {
        console.log(error.message, error);
        console.log("Usuário não verificado.");
    }
}

function obterUsuario(id) {
    //Obtem o usuário com base nos IDs fornecidos.
    const ATIV = true;
    const ID_J = 42;
    const ID_M = 43;

    try {
        if (id === null || id === undefined) {
            throw new Error("Erro: usuário não encontrado.");
        }

        const usuarios = {
            [ID_J]: { id: ID_J, nome: "João Silva", idade: 25, ativo: ATIV },
            [ID_M]: { id: ID_M, nome: "Maria Souza", idade: 28, ativo: !ATIV },
        };

        if (usuarios[id]) {
            return usuarios[id];
        } else {
            throw new Error("Erro: usuário não encontrado.");
        }
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

function atualizarDados(usuario) {
    // Atualiza idade do usuário se for encontrado.
    const IDADE_ADULTO = 18;
    try {
        if (usuario !== null && usuario.idade > IDADE_ADULTO) {
            console.log("Atualizando usuário:", usuario.id);
            usuario.idade += 1;
            console.log("Nova idade do usuário:", usuario.idade);
            if (usuario.idade < IDADE_ADULTO) {
                throw new Error("Erro: usuário menor que a idade permitida.");
            }
            salvarDados(usuario);
        }
    } catch (error) {
        console.log(error.message);
    }
}

function salvarDados(usuario) {
    //Salva os dados do usuário.
    if (usuario !== null) {
        console.log("Dados salvos com sucesso!");
    }
}

function calcular(op, x, y) {
    //Soma, multiplica ou subtrai uma operação simples. (Não sei como diminuir mais isso e me recuso a usar IA.)
    let result = 0;
    const SOMA = 1;
    const MULT = 2;
    const SUB = 3;
    const DIV = 4;

    try {
        if (isNaN(x) || isNaN(y))
            throw new Error(
                "Erro: a operação deve ser feita apenas com números."
            );
        switch (op) {
            case SOMA:
                result = x + y;
                break;
            case MULT:
                result = x * y;
                break;
            case SUB:
                result = x - y;
                break;
            case DIV:
                if (y === 0) {
                    throw new Error("Erro: é impossível dividir por 0.");
                }
                result = x / y;
                break;
            default:
                throw new Error("Erro: operação inválida.");
        }
        console.log(`O resultado é ${result}`);
    } catch (error) {
        if (error.message.includes("números")) {
            console.log("Erro de tipo: insira valores numéricos.");
        } else if (error.message.includes("dividir por 0")) {
            console.log("Erro de cálculo: divisão por zero não permitida.");
        } else {
            console.log("Erro desconhecido:", error.message);
        }
    }
}

function inverter(str) {
    //Recebe uma String texto e inverte ela
    try {
        if ((typeof str === "string") === false) {
            throw new Error("Erro: o programa inverte apenas textos.");
        }
        const REV_STR = str.toString().split("").reverse().join("");
        console.log("String invertida:", REV_STR);
    } catch (error) {
        console.log(error.message);
    }
}

function processarDados(num) {
    //Recebe um número, soma todos os pares desse número em uma soma e remove os ímpares.
    let resultado = 0;
    const PAR = 2;
    try {
        if (isNaN(num)) {
            throw new Error(
                "Erro: a operação deve ser feita apenas com números."
            );
        }
        for (let i = 1; i <= num; i++) {
            if (i % PAR === 0) {
                resultado += i;
            } else {
                resultado -= i;
            }
        }
        console.log("Resultado do processamento:", resultado);
    } catch (error) {
        console.log(error.message);
    }
}

function exibirDados() {
    //Exibe três valores.
    const TAB_VAL = ["Valor 1", "Valor 2", "Valor 3"];
    try {
        if (TAB_VAL.length === 0) {
            throw new Error("Erro: a tabela não pode estar vazia.");
        }
        for (let i = 0; i < TAB_VAL.length; i++) {
            console.log("Dados:", TAB_VAL[i]);
        }
    } catch (error) {
        console.log(error.message);
    }
}

function mostrarInfo() {
    //Mostra dados
    const TAB_DADOS = ["Dado 1", "Dado 2", "Dado 3"];
    try {
        if (TAB_DADOS.length === 0) {
            throw new Error("Erro: a tabela não pode estar vazia.");
        }
        for (let j = 0; j < TAB_DADOS.length; j++) {
            console.log("Info:", TAB_DADOS[j]);
        }
    } catch (error) {
        console.log(error.message);
    }
}

function lerArquivo(path) {
    try {
        const data = fs.readFileSync(path, "utf8");
        console.log("Conteúdo do arquivo:", data);
    } catch (error) {
        console.log("Erro ao ler o arquivo:", error.message);
    }
}

totalItems();
checarAtividade(obterUsuario(42));
verificarUsuario();
atualizarDados(obterUsuario(43));
calcular(1, 5, 5);
inverter("The quick brown fox jumps over the lazy dog");
processarDados(10);
exibirDados();
mostrarInfo();
lerArquivo(); //Adicionei essa pra dar um exemplo melhor do uso do try-catch
