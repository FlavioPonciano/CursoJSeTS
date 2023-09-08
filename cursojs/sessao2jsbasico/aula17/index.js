//Básico de funções em JS - Funções executam ações
function saudacao (nome) { //Criando a função, nomeando a função e passando parametro para a função
    console.log(`Bom dia, ${nome}!`) //Criando o que a função vai apresentar quando for chamada
    return `Bom dia, ${nome}! Com o return.` // Esse valor foi armazenado e retornado na variável
}

saudacao('Flávio') //Chamando a função

const variavel = saudacao('Ponciano') //Posso armazenar uma função dentro de uma variável
console.log(variavel) //Porem esse tipo de variável como a console.log ela não agrega nenhum valor, apenas mostra a mensagem, então ela vai ser executada porém o JS vai informar que ela é undefined

//Para a função retornar algum valor é necessário utilizar o return dentro da função

function soma(x, y) {
    const resultado = x + y //O que está dentro da função não pode ser chamado, somente a função vai ser chamada
    return resultado //Return finaliza a função e o que está abaixo não será executado
    console.log('Essa mensagem não vai ser apresentada')
}

console.log(soma(2, 2))
console.log(soma(2, 3))

//Mesmo não podendo alterar o que está dentro da função, eu posso nomear uma variável fora da função com o mesmo nome, mesmo não sendo muito interessante fazer isso
const resultado = soma(3, 3)
console.log(resultado)
console.log(soma()) //Caso as variável estejam vazias ele vai apresentar NaN
console.log('Flavio', 'Ponciano') //Colocando string ele vai concatenar nesse caso de soma

//Pode-ser indicar valores padrões nos paramêtros das funções, reduzindo a chance de erros do código
function soma2 (x=0, y=0) {
    const resultado2 = x + y
    return resultado2
}

console.log(soma2()) //Vai apresentar 0 devido ao valor padrão dos parametros

//Posso criar uma função dentro de uma variável, criando uma função anônima
const raiz = function (n) {
    return n ** 0.5
}; //Nesse caso é necessário colocar ;

console.log(raiz(9))

//Arrow function: Modo mais moderno de se criar raiz

/* Modo como é feito e abaixo o modo simplificado
const divisaoPorDois = (n) => {
    return n / 2
}
*/

const divisaoPorDois = n => n / 2 //Forma simplificada de uma função

console.log(divisaoPorDois(4))

//Não é interessante criar funções gigantes e sim quebrar em várias funções menores
