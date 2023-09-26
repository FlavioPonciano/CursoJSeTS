//Funções de Callback - São funções que acontecem após a finalização de uma ação
//Função só para trazer um tempo randomico para simular 
function rand (min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}
console.log(rand())

//As funções podem demorar tempos diferentes para o funcionamento na web, então a sequencia de execução pode mudar (feito o exemplo utilizando um tempo randomico)

function f1 (callback) { //Adicionando uma função callback
    setTimeout(function () {
        console.log('f1')
        if (callback) callback() //Parametro da função callback
    }, rand())
}
function f2 (callback) {
    setTimeout(function () {
        console.log('f2')
        if (callback) callback()
    }, rand())
}
function f3 (callback) {
    setTimeout(function () {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

//Um dos modos de fazer a chamada via callback, adicionando uma função dentro da outra dessa forma em sequencia desejada
/*
f1(function () {
    f2(function () {
        f3 (function () {
            console.log('Olá, mundo!')
        })
    })
})
*/

//Outra maneira de declarar o Callback

f1(f1Callback)

function f1Callback() {
    f2(f2Callback)
}

function f2Callback() {
    f3(f3Callback)
}

function f3Callback() {
    console.log('Olá, mundo segunda versão!')
}
