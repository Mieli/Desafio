
const { calcularRankeamento, criarMensagemDoHeroi, calcularNivelDoHeroi } = require('./index');

test("testar o retorno da função para calcular o saldo de rankeadas que deve ser igual a 8", () => {

    const vitorias = 10;
    const derrotas = 2;
    expect(calcularRankeamento(vitorias, derrotas)).toBe(vitorias - derrotas);

});

test("deve criar uma mensagem do saldo de vitórias e do nível do herói", () => {

    const saldoVitorias = 10;
    const nivel = 4;
    expect(criarMensagemDoHeroi(saldoVitorias, nivel)).toBe(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);

});


test('deve retornar o nivel do herói Ferro', () => {
    expect(calcularNivelDoHeroi(9)).toBe('Ferro');
});

test('deve retornar o nivel do herói Bronze', () => {
    expect(calcularNivelDoHeroi(11)).toBe('Bronze');
});

test('deve retornar o nivel do herói Bronze', () => {
    expect(calcularNivelDoHeroi(20)).toBe('Bronze');
});

test('deve retornar o nivel do herói Bronze', () => {
    expect(calcularNivelDoHeroi(15)).toBe('Bronze');
});


test('Teste para o nível Ferro', () => {
    expect(calcularNivelDoHeroi(5)).toBe("Ferro");
});

test('Teste para o nível Bronze', () => {
    expect(calcularNivelDoHeroi(15)).toBe("Bronze");
});

test('Teste para o nível Prata', () => {
    expect(calcularNivelDoHeroi(30)).toBe("Prata");
});

test('Teste para o nível Ouro', () => {
    expect(calcularNivelDoHeroi(70)).toBe("Ouro");
});

test('Teste para o nível Diamante', () => {
    expect(calcularNivelDoHeroi(85)).toBe("Diamante");
});

test('Teste para o nível Lendário', () => {
    expect(calcularNivelDoHeroi(95)).toBe("Lendário");
});

test('Teste para o nível Imortal', () => {
    expect(calcularNivelDoHeroi(110)).toBe("Imortal");
});

test('Teste para o nível Imortal', () => {
    expect(calcularNivelDoHeroi(101)).toBe("Imortal");
});
