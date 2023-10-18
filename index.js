const readline = require('readline');

const lerConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRankeamento(vitorias, derrotas) {
    return vitorias - derrotas;
}

const criarMensagemDoHeroi = (saldoVitorias, nivel) => {
    const mensagem = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    return mensagem;
}

function calcularNivelDoHeroi(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

const inicializarPrograma = () => {

    lerConsole.question('Por favor, insira a quantidade de vitórias do Herói: ', (respostaVitorias) => {
        vitorias = parseInt(respostaVitorias) || 0;

        lerConsole.question('Por favor, insira a quantidade de derrotas do Herói: ', (respostaDerrotas) => {
            derrotas = parseInt(respostaDerrotas) || 0;

            lerConsole.close(); // Fecha a interface de leitura

            const saldoDeVitorias = calcularRankeamento(vitorias, derrotas);
            const nivel = calcularNivelDoHeroi(vitorias);
            console.log(criarMensagemDoHeroi(saldoDeVitorias, nivel));
        });
    });
}


inicializarPrograma();


//exportar a função para ser utilizada em qualquer arquivo do projeto
module.exports = {
    calcularRankeamento,
    criarMensagemDoHeroi,
    calcularNivelDoHeroi,
};