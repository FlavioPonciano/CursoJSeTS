//Parâmetros da Função
//Caso o paramêtro da função que são os () estejam vazios, mesmo passando um valor dentro deles na chamada o JS ignora a informação e continua executando a função
function funcao() {
    console.log(arguments[0]) //Utilizando a arguments que vai jogar todos os argumentos dentro de um objeto. E podendo utilizar o indice para puxar algum especifico
}
funcao('Valor', 1, 2) //Os argumentos declarados em parametros não utilizados, caso eu queira mostrar esses argumentos, posso utilizar a variável arguments que sustenta todos os argumentos e eles serão mostrados

//Utilizando o arguments eu posso realizar funções mesmo sem ter paramêtro definido:
function somaArgumentos(a, b, c) {
    let total = 0
    for(let argumento of arguments) { //Para cada argumento de arguments ele vai incrementar o valor no total
        total += argumento
    }
    console.log(total, a, b, c) //Deixando o log fora do for para mostrar somente a soma final e os parametros, mesmo tendo parametros eles armazeam os primeiros valores e o restante segue nos argumentos, porém todos seguem no argumento
}

somaArgumentos(1, 2, 3, 4, 5) //Argumentos somados mesmo sem ter parametros ou tendo parametros pré-definidos
//*****arguments só funcionam com função declarada, não funciona com arrow function

//Caso o parametro não foi enviado o JS inclui o valor undefined
function outraFuncao (a, b, c, d, e , f) {
    console.log(a, b, c, d, e, f)
}
outraFuncao(1, 2, 3)

//Posso setar valor padrão para os parametros
function funcaoSoma (a, b = 2, c = 4) {
    a = a || 0 //Formato antigo de se atribuir valor padrão ao parametro
    console.log(a + b + c)
}
funcaoSoma(2, undefined, 20) //Atribuir undefined no meio de dos argumentos vai fazer com que o valor padrão seja setado para a operação e null vai atribuir 0

//Atribuição via Desestruturação utilizando parametros da function:
function funcaoComDesestruturacao ({ nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
//Posso passar direto na chamada da função ou atribuir o objeto à uma viarável
funcaoComDesestruturacao({nome: 'Luiz', sobrenome: 'Otavio', idade: 20})
let obj = {nome: 'Flávio', sobrenome: 'Ponciano', idade: 20}
funcaoComDesestruturacao(obj)

function funcaoDesestruturacaoArray ([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcaoDesestruturacaoArray(['Logan', 'Ponciano', 2]) //Podendo ser chamada literalmente e tambem via vaviável

//Utilizando o rest operator para receber o restante dos argumentos dentro do ultimo parametro e ele vai adicionar esses valores dentro de um array
const conta = function(operador, acumulador, ...numeros) { //rest ele tem que ser sempre o ultimo parametro
    console.log(arguments)
    for (let numero of numeros) { //no for o in retorna indice e of retorna os elementos 
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50)

//Posso utilizar o rest operator para atribuir todos os argumentos para dentro da funçãop
const contaRestArguments = (...argumentos) => {
    console.log(argumentos)
}

contaRestArguments('+', 1, 5, 10, 15)

