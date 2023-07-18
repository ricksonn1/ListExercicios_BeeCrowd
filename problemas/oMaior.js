// Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”.


// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

// Entrada
// O arquivo de entrada contém três valores inteiros.

// Saída
// Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".


const prompt = require('prompt-sync')();

const valor1 = Number(prompt('Digite o primeiro valor: '))
const valor2 = Number(prompt('Digite o segundo valor: '))
const valor3 = Number(prompt('Digite o terceiro valor: '))

if (valor1 > valor2 && valor1 > valor3) {
    console.log(`eh o maior: ${valor1}`)
} else if (valor2 > valor1 && valor2 > valor3) {
    console.log(`eh o maior: ${valor2}`)
} else if (valor3 > valor1 && valor3 > valor2) {
    console.log(`eh o maior: ${valor3}`)
}