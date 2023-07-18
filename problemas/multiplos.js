// Leia 2 valores inteiros (A e B). Após, 
// o programa deve mostrar uma mensagem 
// "Sao Multiplos" ou "Nao sao Multiplos", 
// indicando se os valores lidos são múltiplos entre si.
// Entrada
// A entrada contém valores inteiros.
// Saída
// A saída deve conter uma das mensagens conforme descrito acima.

const readline = require('readline-sync')

const a = readline.questionFloat('Digite o valor de A: ')
const b = readline.questionFloat('Digite o valor de B: ')

function verificaMultiplos(a, b) {

    if (a % b === 0) {
        console.log(`Sao multiplos`)
    } else {
        console.log(`Nao sao multiplos`)
    }

}

verificaMultiplos(a, b)