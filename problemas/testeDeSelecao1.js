// // Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, 
// ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

// // Entrada
// // Quatro números inteiros A, B, C e D.

// // Saída
// // Mostre a respectiva mensagem após a validação dos valores.

const prompt = require('prompt-sync')();

const a = Number(prompt('Digite o valor de A:  '))
const b = Number(prompt('Digite o valor de B:  '))
const c = Number(prompt('Digite o valor de C:  '))
const d = Number(prompt('Digite o valor de D:  '))

if (b > c && d > a && c + d > a + b && c && d > 0) {
    console.log('valores aceitos')
} else {
    console.log('valores nao aceitos')
}

