//Filter + Map + Reduce
//Filtrar pares
//Dobrar os valores
//Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//Unindo os três ele vai mostrando o resultado de acordo com a sequencia que foi indicado, neste exemplo, ele primeiro pega os números pares, depois dobra o valor e soma tudo por ultimo
const numerosPares = numeros.filter(function(valor) {
    return valor % 2 === 0 //Pegando os números pares
}).map(function(valor) {
    return valor * 2 //Dobrando o valor dos números pares que foram pegos
}).reduce(function(acumulador, valor) {
    acumulador += valor //Somando todos os valores duplicados anteriormente
    return acumulador
})
console.log(numerosPares)

//Formato utilizando arrow function:
const numerosPares2 = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor)
console.log(numerosPares2)