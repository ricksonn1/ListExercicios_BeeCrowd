// Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. 
// Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:
// Perimetro = XX.X
// Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem
// Area = XX.X
// Entrada
// A entrada contém três valores reais.
// Saída
// O resultado deve ser apresentado com uma casa decimal.'

const readline = require('readline-sync')

const a = readline.questionFloat('Digite o primeiro valor: ')
const b = readline.questionFloat('Digite o segundo valor: ')
const c = readline.questionFloat('Digite o terceiro valor: ')

function calculaPerimetro(a, b, c) {
    return a + b + c
}

function calculaTrapezio(a, b, c) {
    return ((a + b) * c) / 2
}

function verificaTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        const perimetro = calculaPerimetro(a, b, c)
        console.log('Perimetro = ' + perimetro.toFixed(1))
    } else {
        const area = calculaTrapezio(a, b, c)
        console.log('Area = ' + area.toFixed(1))
    }
}

verificaTriangulo(a, b, c);