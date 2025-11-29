// Exercicio 1

// Dado a lista de cidades:
// const cidades = ['Rio de Janeiro', 'Belo Horizonte', 'São Paulo', 'Porto Alegre', 'Florianópolis']

// Imprima a primeira cidade
// Imprima a segunda cidade
// Adicione uma cidade no inicio
// Imprima a primeira cidade
// Adicione uma cidade no final
// Imprima a ultima cidade
// Obs: sempre informe o que está imprimindo


// Exercicio 2
// Em uma lista de nomes, onde tenho:
// const nomes = ['Eduardo', 'Maria', 'José', 'Fernanda', 'Pedro']

// Percorra a lista de nomes e imprima um a um

//********************************||***************************************||****************//

//Resolução Exercicio 1

const cidades = ['Rio de Janeiro', 'Belo Horizonte', 'São Paulo', 'Porto Alegre', 'Florianópolis']

console.log('Primeira cidade:', cidades[0]);
console.log('Segunda cidade:', cidades[1]);

cidades.unshift('Bahia');
console.log('Nova primeira cidade:', cidades[0]);

cidades.push('Cuiabá');
console.log('Última cidade:', cidades[cidades.length - 1]);

//Resolução Exercicio 2

const nomes = ['Eduardo', 'Maria', 'José', 'Fernanda', 'Pedro'];

for (let i = 0; i < nomes.length; i++) {
    console.log('Nome: ', nomes[i]);
}