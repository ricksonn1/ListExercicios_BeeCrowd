// Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, 
// sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.
// Entrada
// A entrada contém dois valores inteiros representando a hora de início e a hora de fim do jogo.
// Saída
// Apresente a duração do jogo conforme exemplo abaixo.

const readline = require('readline-sync')

const horaInicial = readline.questionInt('Que horas o jogo iniciou? ')
const horaFinal = readline.questionInt('Que horas o jogo finalizou? ')

let duracaohora;

if (horaFinal < horaInicial || horaFinal === horaInicial) {
    duracaohora = (24 - horaInicial) + horaFinal
} else {
    duracaohora = horaFinal - horaInicial;
}

if (duracaohora < 0) {
    duracaohora += 24;
}

if (duracaohora >= 1 && duracaohora <= 24) {
    console.log(`O JOGO DUROU ${duracaohora} HORA(S)`)
}