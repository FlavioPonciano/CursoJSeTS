//Funções Geradoras - Elas pausam o código em determinado local (lazy valuation)
function* geradora1 () {
    // Ao invés de utilizar return, se utiliza yield
    //Se utilizar o return ele vai retornar o valor e finalizar a função geradora
    //Código qualquer...
    yield 'Valor 1'
    //Código qualquer...
    yield 'Valor 2'
    //Código qualquer...
    yield 'Valor 3'
}

const g1 = geradora1()
console.log(g1) //Dessa forma retorna informando que é um gerador de objeto
console.log(g1.next()) //Dessa forma retorna um objeto com os valores dentro { value: 'Valor 1', done: false } done: false informa que os valores ainda não acabaram, quando finalizar ele retorna para true
console.log(g1.next().value) //Chamando o valor que está dentro do objeto gerado 
console.log(g1.next().value) //Cada vez que é chamado ele retorna um dos valores

//Posso montar um for para que ele traga todos os valores
const g2 = geradora1()

for (let valor of g2) {
    console.log(valor)
}

//Gerador infinito, a cada chamada ele vai sempre retornar o valor
function* geradora2 () {
    let i = 0
    while(true) {
        yield i
        i++
    }
}

const g3 = geradora2()
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)
console.log(g3.next().value)

console.log('----Divisão')

//Gerador que delega tarefa para outro gerador:
function* geradora3 () {
    yield 0
    yield 1
    yield 2
}

function* geradora4 () {
    yield* geradora3() //Informo que é necessário primeiro os valores da função geradora citada e depois segue a sequencia dessa geradora que chama a outra
    yield 3
    yield 4
    yield 5
}

const g4 = geradora4()
for (let valor of g4) {
    console.log(valor)
}

function* geradora5 () {
    yield function () {
        console.log('Vim do yield1')
    }

    yield function () {
        console.log('Vim do yield2')
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
func1()
func2()