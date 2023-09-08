let nome = 'André' //let para variáveis (que podem variar)

console.log(nome, 'nasceu em 1984.')
console.log(`Em 2000 ${nome} conheceu Maria.`)
console.log(`${nome} casou-se com Maria em 2012.`)
console.log(`Maria teve 1 filho com ${nome} em 2015.`)
console.log(`O filho de ${nome} se chama Eduardo.`)

//Podemos declarar uma varíavel sem inicializar ela e caso chamada no console ele sera undefined
let variavel
//Posso inicializar ela em outro momento:
variavel = 'Essa variável foi inicializada'
console.log(variavel)

//Não podemos criar variáveis com palavras reservadas da linguagem.
//Variáveis precisam ter nome significativos.
//Não pode começar o nome de uma varíavel com um número.
//Nome de variável não pode conter espaços ou traços.
//Variáveis são case-sensitive (elas difereciam entre maiusculas e minusculas).
//Não podemos redeclarar variáveis com let somente 1x
//Sempre utilizar let ao invés de var