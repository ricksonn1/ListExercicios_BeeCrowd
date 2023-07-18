// Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item.
//  A seguir, calcule e mostre o valor da conta a pagar.

// Entrada
// O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

// Saída
// O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

const prompt = require('prompt-sync')();

let codigoDoPedido = Number(prompt(
    `CODIGO     ESPECIFICAÇÃO     PREÇO  
   1         Cachorro Quente   R$ 4.00
   2         X-Salada          R$ 4.50
   3         X-Bacon           R$ 5.00
   4         Torrada Simples   R$ 2.00
   5         Refrigerante      R$ 1.50 
Digite o código do produto: `))

while(codigoDoPedido > 5){
    codigoDoPedido = Number(prompt('Por favor digite um número válido de 1 a 5: '))
}


if (codigoDoPedido === 1) {
    const quantidade = Number(prompt('Agora digite a quantidade: '));
    const soma = 4.00 * quantidade
    console.log(`Total: R$ ${soma.toFixed(2)}`)
} else if (codigoDoPedido === 2) {
    const quantidade = Number(prompt('Agora digite a quantidade: '));
    const soma = 4.50 * quantidade
    console.log(`Total: R$ ${soma.toFixed(2)}`)
} else if (codigoDoPedido === 3) {
    const quantidade = Number(prompt('Agora digite a quantidade: '));
    const soma = 5.00 * quantidade
    console.log(`Total: R$ ${soma.toFixed(2)}`)
} else if (codigoDoPedido === 4) {
    const quantidade = Number(prompt('Agora digite a quantidade: '));
    const soma = 2.00 * quantidade
    console.log(`Total: R$ ${soma.toFixed(2)}`)
} else if (codigoDoPedido === 5) {
    const soma = 1.50 * quantidade
    console.log(`Total: R$ ${soma.toFixed(2)}`)
} 