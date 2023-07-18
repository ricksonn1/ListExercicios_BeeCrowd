// Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. 
// A seguir calcule a duração do jogo.
// Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
// Entrada
// Quatro números inteiros representando a hora de início e fim do jogo.
// Saída
// Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .

const readline = require('readline-sync')

const horaInicial = readline.questionInt('Digite a hora inicial: ')
const minutoInicial = readline.questionInt('Digite o minuto inicial: ')
const horaFinal = readline.questionInt('Digite a hora final: ')
const minutoFinal = readline.questionInt('Digite o minuto final: ')

let duracaoHora;
let duracaoMinuto;

if (horaFinal < horaInicial || horaFinal === horaInicial && minutoFinal < minutoInicial) {
    duracaoHora = (24 - horaInicial + horaFinal)
} else {
    duracaoHora = horaFinal - horaInicial;
}

duracaoMinuto = minutoFinal - minutoInicial

if (duracaoMinuto < 0) {
    duracaoHora--;
    duracaoMinuto += 60;
}

if (duracaoHora < 0) {
    duracaoHora += 24;
}

if (duracaoHora >= 1 && duracaoHora <= 24) {
    console.log(`O JOGO DUROU ${duracaoHora} HORA(S) E ${duracaoMinuto} MINUTO(S)`)
}