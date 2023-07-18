// // Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas 
// possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. 
// As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

// // Entrada
// // O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

// // Saída
// // Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

// // Obs: Utilize ponto (.) para separar a parte decimal.


const prompt = require('prompt-sync')();

const valor = Number(prompt('Digite o valor: '));

function convertendoOValor(valor) {
    console.log(`Valor lido: ${valor}`)

    const notas = [100, 50, 20, 10, 5, 2];
    const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];


    console.log(`NOTAS: `)
    for (const nota of notas) {
        const quantidade = Math.floor(valor / nota)
        valor %= nota
        console.log(`${quantidade} nota(s) de R$ ${nota.toFixed(2)}`)
    }
    console.log(`MOEDAS: `)
    for (const moeda of moedas) {
        const quantidade = Math.floor(valor / moeda)
        valor %= moeda
        console.log(`${quantidade} moeda(s) de R$ ${moeda.toFixed(2)}`)
    }
}

convertendoOValor(valor);