//Retorno da Função - return - retorna um valor e termina a função

/*Exemplo de função que não retorna nada:
document.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red'
})
*/
//Posso utilizar função para criar os objetos
function criaPessoa(nome, sobrenome) {
    return {
        nome: nome, sobrenome //ambos modelos estão certo caso o parametro e o indice do objeto tenham o mesmo nome
    }
}
const p1 = criaPessoa('Flávio', 'Ponciano') //Da mesma forma que eu tenho um objeto criado pela função
const p2 = { //É identico ao objeto criado manualmente
    nome: 'João',
    sobrenome: 'Oliveira'
}
console.log(p1, p2)

function falaFrase (comeco) {
    function falaResto (resto) {
        return comeco + ' ' + resto //falaResto recebe o comeco da funcao maior e retorn o come + resto
    }
    return falaResto //fala resto está retornando o começo + o final com um espaço aplicado
}

const olaMundo = falaFrase ('Olá') //Como eu utilizado o falaFrase ele pega a função de dentro também e armazerna então nesse caso ficaria dentro do falaResto um return "Olá" + " " + resto (resto que ainda não foi declarado)
console.log(olaMundo('mundo!')) //Eu chamo a função olaMundo pois ela vira uma função eu estou declarando o restante dela então o return do falaResto fica "Olá" + " " + "mundo!", pois o olá já foi setado no falaFrase, tanto que se o argumento não estiver completo ele recebe um undefined

//Outro modo de chamar a função:
const fala = falaFrase('Olá')
const resto = fala('mundo!2')
console.log(resto)

//Onde será util algo do tipo anterior:
function criaMultiplicador (multiplicador) {
    //multiplicador
    return function (n) { //retornando direto a função sem precisar colocar um nome nela para a chamada pois já estou retornando
        return n * multiplicador
    }
}
//A função lembra do seu "vizinho" então eu estou atribuindo um valor ao multiplicador nesse primeiro momento
const duplica = criaMultiplicador(2) //a variável duplica recebe a funcao primaria 
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)
//E em uma segunda chamada estou atribuindo valor ao número à ser multiplicado
console.log(duplica(3)) //E essa variável que recebeu a funcao primeira vai receber o segundo argumento para dentro da funcao mais interno
console.log(triplica(2))
console.log(quadriplica(10))