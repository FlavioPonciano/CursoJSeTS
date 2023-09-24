//Declaração de Função (Function Hoisting)
// Com o Hoisting eu posso chamar a função em qualquer posição mesmo antes de declarar ela, pois todas as declarações são elevadas pelo motor do JS para o inicio da execução, mas somente neste modelo de declaração de função
falaOi()
function falaOi () {
    console.log('Oie')
}

//First-class objects (Objetos de primeira classe) - Todas as funções são
//Function expression - criar uma variável e jogar um função nessa variável
const souUmDado = function nomeDaFuncao() { //Pode nomear a função mas isso não é tão utilizado
    console.log('Sou um dado')
}
souUmDado() //Variável recebeu uma função e se porta como uma função e pode ser executada por outra função e ser parametro para outra função

function executaFuncao (funcao) {
    console.log('Vou executar sua função abaixo')
    funcao()
}
executaFuncao(souUmDado) //Executando a função que foi declarada na variável anteriormente

//Arrow function
const funcaoArrow = () => {
    console.log('So uma arrow function')
}
funcaoArrow()

//Posso ter uma function dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...')
    },
    falar2() {
        console.log('Não preciso utilizar a palavra function dentro do objeto')
    }
}
obj.falar()
obj.falar2()