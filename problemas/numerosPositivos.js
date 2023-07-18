// Faça um programa que leia 6 valores. Estes valores serão somente negativos 
// ou positivos (desconsidere os valores nulos). 
// A seguir, mostre a quantidade de valores positivos digitados.
// Entrada
// Seis valores, negativos e/ou positivos.
// Saída
// Imprima uma mensagem dizendo quantos valores positivos foram lidos.

const readline = require('readline-sync')


let valor = []
let count = 0;

for (let index = 0; index < 6; index++) {
    let numeros = readline.question('Digite 6 valores, negativos ou posivitos: ')
    valor[index] = numeros

    if (numeros > 0) {
        count++;
    }
}
console.log(`${count} valores posivitos`)