
const { calcularRankeamento, criarMensagemDoHeroi, calcularNivelDoHeroi } = require('./index');

test("testar o retorno da função para calcular o saldo de rankeadas que deve ser igual a 8", () => {

    const vitorias = 10;
    const derrotas = 2;

    let rankeadas = calcularRankeamento(vitorias, derrotas);

    const expected = (vitorias - derrotas);


    expect(rankeadas).toBe(expected);

});

test("deve criar uma mensagem do saldo de vitórias e do nível do herói", () => {

    const saldoVitorias = 10;
    const nivel = 4;

    const mensagem = criarMensagemDoHeroi(saldoVitorias, nivel);

    expect(mensagem).toBe(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

});

test('deve retornar o nivel do herói vazio', () => {
    const vitorias = 10;

    const nivel = calcularNivelDoHeroi(vitorias);

    expect(nivel).toBe('');
});

test('deve retornar o nivel do herói Ferro', () => {
    const vitorias = 9;

    const nivel = calcularNivelDoHeroi(vitorias);

    const expected = 'Ferro'

    expect(nivel).toBe(expected);
});

test('deve retornar o nivel do herói Bronze', () => {
    const vitorias = 11;

    const nivel = calcularNivelDoHeroi(vitorias);

    expect(nivel).toBe('Bronze');
});

test('deve retornar o nivel do herói Bronze', () => {
    const vitorias = 20;

    const nivel = calcularNivelDoHeroi(vitorias);

    expect(nivel).toBe('Bronze');
});

test('deve retornar o nivel do herói Bronze', () => {
    const vitorias = 15;

    const nivel = calcularNivelDoHeroi(vitorias);

    expect(nivel).toBe('Bronze');
});
