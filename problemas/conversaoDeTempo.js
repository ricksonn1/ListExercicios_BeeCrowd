// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

// Entrada
// O arquivo de entrada contém um valor inteiro N.

// Saída
// Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.


const prompt = require('prompt-sync')();

const tempo = Number(prompt('Digite o tempo em segundos: '))

function converterTempo(segundos) {
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosQueRestam = segundos % 60;

    return `${horas}:${minutos}:${segundosQueRestam}`
}

console.log(converterTempo(tempo));