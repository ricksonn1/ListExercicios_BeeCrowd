// Leia 3 valores inteiros e ordene-os em ordem crescente. 
// No final, mostre os valores em ordem crescente, uma linha em 
// branco e em seguida, os valores na sequência como foram lidos.
// Entrada
// A entrada contem três números inteiros.
// Saída
// Imprima a saída conforme foi especificado.


const readline = require('readline-sync')

const valor1 = readline.questionInt('Digite um valor: ')
const valor2 = readline.questionInt('Digite um valor: ')
const valor3 = readline.questionInt('Digite um valor: ')

const array = [valor1, valor2, valor3]

const numeroOrdenados = array.sort((a, b) => a - b)

console.log(numeroOrdenados.join('\n'))
console.log(`\n${valor1} 
${valor2} 
${valor3}`)
