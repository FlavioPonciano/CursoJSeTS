//Closures - habilidade da função de acessar seu escopo léxico
//Closure pode ser alterado de função para função, de acordo com a declaração
function retornaFuncao () {
    const nome = 'Luiz'//Closures
    return function () {
        return nome
    }
}

const funcao = retornaFuncao()
console.dir(funcao)

//console.dir() //Mostra informações no navegador