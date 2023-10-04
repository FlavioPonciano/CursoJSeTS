//Filter - Filtrando Array (filtra mas não edita o array original), retorna sempre um array ccom a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
//Posso utilizare a function como função anonima dentro do filter
function callbackFilter(valor, indice, array) { //Posso receber valor, indice e array
    return valor > 10 //Posso utilizar if mas posso retornar somente a condição dessa forma
    //filter recevendo true ele vai adicionar o elemento ao array 
}

//Posso utilizar a function como anonima dentro do filter, caso ela não seja utiliza em outro momento do código
const numerosFiltrados = numeros.filter(function(valor) {
    return valor > 10 
})


//Posso fazer uma arrow function também
const numerosFiltrados1 = numeros.filter(valor => valor > 10) //Tendo apenas um argumento eu posso retirar o parentese da arrow function e somento uma linha condicional também posso retirar o return e as chaves

//Posso retornar a sequencia também, no resultado, pois ele está fazendo um for item por item
const numerosFiltrados2 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array)
    return valor > 10
})
console.log(numerosFiltrados, numerosFiltrados1, numerosFiltrados2)
