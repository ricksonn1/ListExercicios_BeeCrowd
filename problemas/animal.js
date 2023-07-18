// Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  
// Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.
// Entrada
// A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

// Saída
// Imprima o nome do animal correspondente à entrada fornecida.

const readline = require('readline-sync')

const palavra1 = readline.question('Digite a primeira palavra com letras minusculas: ')
const palavra2 = readline.question('Digite a segunda palavra com letras minusculas:: ')
const palavra3 = readline.question('Digite a terceira palavra com letras minusculas:: ')

if (palavra1 === 'vertebrado' && palavra2 === 'ave' && palavra3 === 'carnivoro') {
    console.log('aguia')
} else if (palavra1 === 'vertebrado' && palavra2 === 'ave' && palavra3 === 'onivoro') {
    console.log('pomba')
} else if (palavra1 === 'vertebrado' && palavra2 === 'mamifero' && palavra3 === 'onivoro') {
    console.log('homem')
} else if (palavra1 === 'vertebrado' && palavra2 === 'mamifero' && palavra3 === 'herbivoro') {
    console.log('vaca')
} else if (palavra1 === 'invertebrado' && palavra2 === 'inseto' && palavra3 === 'hematofago') {
    console.log('pulga')
} else if (palavra1 === 'invertebrado' && palavra2 === 'inseto' && palavra3 === 'herbivoro') {
    console.log('lagarta')
} else if (palavra1 === 'invertebrado' && palavra2 === 'anelideo' && palavra3 === 'onivoro') {
    console.log('minhoca')
} else{
    console.log('animal não encontrado!')
}