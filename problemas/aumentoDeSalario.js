// A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:
// Salário	Percentual de Reajuste
// 0 - 400.00 15%
// 400.01 - 800.00 12%
// 800.01 - 1200.00 10%
// 1200.01 - 2000.00 7%
// Acima de 2000.00 4%
// Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.
// Entrada
// A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.
// Saída
// Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.

const readline = require('readline-sync')

const salario = readline.questionFloat('Digite seu salario para o calculo: ')


if (salario <= 400.00) {
    const novoSalario = salario + (salario * 0.15)
    const reajuste = novoSalario - salario
    console.log(
        `Novo salario: ${novoSalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 15 %`)
} else if (salario > 400.01 && salario <= 800.00) {
    const novoSalario = salario + (salario * 0.12)
    const reajuste = novoSalario - salario
    console.log(
        `Novo salario: ${novoSalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 12 %`)
} else if (salario >= 800.01 && salario <= 1200.00) {
    const novoSalario = salario + (salario * 0.10)
    const reajuste = novoSalario - salario
    console.log(
        `Novo salario: ${novoSalario.toFixed(2)}
Reajuste ganho: ${reajuste.toFixed(2)}
Em percentual: 10 %`
    )
} else if (salario >= 1200.01 && salario <= 2000.00) {
    const novoSalario = salario + (salario * 0.07)
    const reajuste = novoSalario - salario
    console.log(
        `Novo salario: ${novoSalario.toFixed(2)}
Reajuste: ${reajuste.toFixed(2)}
Em percentual: 7 %`
    )
} else if (salario > 2000.00) {
    const novoSalario = salario + (salario * 0.04)
    const reajuste = novoSalario - salario
    console.log(
        `Novo salario: ${novoSalario.toFixed(2)}
Reajuste: ${reajuste.toFixed(2)}
Em percentual: 4 %`
    )
}