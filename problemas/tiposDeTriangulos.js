// Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de 
// modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de 
// triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
// se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
// se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
// se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
// se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
// se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
// se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
// Entrada
// A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

// Saída
// Imprima todas as classificações do triângulo especificado na entrada.



const readline = require('readline-sync')

const a = readline.questionFloat('Digite o valor de a: ')
const b = readline.questionFloat('Digite o valor de b: ')
const c = readline.questionFloat('Digite o valor de c: ')

const lados = [a, b, c]
lados.sort((a, b) => b - a)

const [ladoA, ladoB, ladoC] = lados;

function triangulo(a, b, c) {
    if (ladoA >= ladoB + ladoC) {
        console.log('NAO FORMA TRIANGULO')
    } else if (Math.pow(ladoA, 2) === Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
        console.log('TRIANGULO RETANGULO')
    } else if (Math.pow(ladoA, 2) > Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
        console.log('TRIANGULO OBTUSANGULO')
    } else if (Math.pow(ladoA, 2) < Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) {
        console.log('TRIANGULO ACUTANGULO')
    }

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log('TRIANGULO EQUILATERO')
    } else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        console.log('TRIANGULO ISOSCELES')
    }
}

triangulo(a, b, c)