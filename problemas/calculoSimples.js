// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
// o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// Entrada
// O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

// Saída
// A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando 
// de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.


const prompt = require('prompt-sync')()

const codigoDaPeca1 = Number(prompt('Digite o codigo da peça 1: '))
const codigoDaPeca2 = Number(prompt('Digite o codigo da peça 2: '))

const numeroDePecas1 = Number(prompt('quantas peças você vai levar do primeiro código? '))
const numeroDePecas2 = Number(prompt('quantas peças você vai levar do segundo código? '))

const valorPeca1 = Number(prompt('Qual valor de cada peça do primeiro código? '))
const valorPeca2 = Number(prompt('Qual valor de cada peça do segundo código? '))

const valorTotalPeca1 = valorPeca1 * numeroDePecas1;
const valorTotalPeca2 = valorPeca2 * numeroDePecas2;

const total = valorTotalPeca1 + valorTotalPeca2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
