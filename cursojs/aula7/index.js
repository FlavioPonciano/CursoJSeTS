//Não podemos criar constante com palavras reservadas da linguagem.
//Constantes precisam ter nome significativos.
//Não pode começar o nome de uma constante com um número.
//Nome de constante não pode conter espaços ou traços.
//Constantes são case-sensitive (elas difereciam entre maiusculas e minusculas).
//Não podemos modificar o valor de uma constante e precisam ser inicializadas
//Sempre utilizar const ao invés de var

const nome = 'João'
console.log(nome, 'nasceu em 1984.')
console.log(`Em 2000 ${nome} conheceu Maria.`)
console.log(`${nome} casou-se com Maria em 2012.`)
console.log(`Maria teve 1 filho com ${nome} em 2015.`)
console.log(`O filho de ${nome} se chama Eduardo.`)

//Posso atribuir o valor de uma variável ou uma constante à outra variável ou constante

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado)

//Sabendo o tipo de variável:
console.log(typeof primeiroNumero)