/*Escreva uma função que recebe um número e retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e por 5 = FizzBuzz
Número NÂO é divisível por  3 e 5  = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 à 100
*/
/* Primeira versão
function verificaNumero (numero) {
    if (typeof numero !== 'number') {
        return 'Não é um número'
    } else {
        if (numero % 3 === 0 && numero % 5 === 0) {
            return 'FizzBuzz'
        } else if (numero % 3 === 0) {
            return 'Fizz'
        } else if (numero % 5 === 0) {
            return 'Buzz'
        } else {
            return numero
        }
    }
}

let numero = 25
console.log(verificaNumero(numero))
*/
function verificaNumero (numero) {
    if (typeof numero !== 'number') return 'Não é um número' //Se a variável não for um número retorna mensagem e finaliza o código

    let resultado = '' //cria uma variável limpa
    //Verifica e atribui valor à variável de acordo com a condicional
    if (numero % 3 === 0) resultado += 'Fizz'
    if (numero % 5 === 0) resultado += 'Buzz'

    return resultado || numero //Retorna o resultado se a variável tiver elemento ou se não retorna numero
    //Caso nenhuma condição seja atribuida ao resultado, ele vai ser false então ele vai retornar o número
}

let numero = 23

for (let i = 0; i <= 100; i++) {
    console.log(i, verificaNumero(i))
}

//Resultado professor:
function fizzbuzz (numero) {
    if (typeof numero !== 'number') return numero
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i))
}