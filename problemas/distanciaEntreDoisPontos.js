// Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e 
// calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

// Distancia =

// Entrada
// O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

// Saída
// Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.

const prompt = require('prompt-sync')()

const x1 = Number(prompt('Digite o valor de x1: '))
const x2 = Number(prompt('Digite o valor de x2: '))
const y1 = Number(prompt('Digite o valor de y1: '))
const y2 = Number(prompt('Digite o valor de y2: '))

const distancia = Math.sqrt(Math.pow(x1 - x2, 2) + (Math.pow(y1 - y2, 2)))

console.log(`DISTANCIA = ${distancia.toFixed(4)}`)
