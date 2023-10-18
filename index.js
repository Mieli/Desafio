function calcularRankeamento(vitorias, derrotas) {
    return vitorias - derrotas;
}

const criarMensagemDoHeroi = (saldoVitorias, nivel) => {
    const mensagem = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    return mensagem;
}

function calcularNivelDoHeroi(vitorias) {
    if (vitorias < 10) {
        return 'Ferro';
    } else if (vitorias >= 11 || vitorias == 20) {
        return 'Bronze';
    } else {
        return '';
    }
}


//exportar a função para ser utilizada em qualquer arquivo do projeto
module.exports = {
    calcularRankeamento,
    criarMensagemDoHeroi,
    calcularNivelDoHeroi,
};