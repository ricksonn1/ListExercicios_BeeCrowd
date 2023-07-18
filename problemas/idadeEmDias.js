// Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

// Entrada
// O arquivo de entrada contém um valor inteiro.

// Saída
// Imprima a saída conforme exemplo fornecido.

const prompt = require('prompt-sync')();

const pegaIdade = Number(prompt('Digite um valor: '));

function transformandoIdadeEmDias(idade){
    const ano = Math.floor(idade / 365);
    const mes = Math.floor((idade % 365) / 30);
    const dias = idade % 30;

    return `${ano} ano(s)` + `\n${mes} mes(es)` + `\n${dias} dia(s)`
}

console.log(transformandoIdadeEmDias(pegaIdade))