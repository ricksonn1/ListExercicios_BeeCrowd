// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// Entrada
// O arquivo de entrada contém 4 valores inteiros.

// Saída
// Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.


const prompt = require('prompt-sync')()

const a = Number(prompt('Digite um valor: '))
const b = Number(prompt('Digite um valor: '))
const c = Number(prompt('Digite um valor: '))
const d = Number(prompt('Digite um valor: '))


const diferenca = (a * b) - (c * d);

console.log(`DIFERENÇA = ${diferenca}`)