//Map - Mapeando o array (alterar valores do meu array, array do mesmo tamanho mas com valores diferentes)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//Quero dobrar os valores dentro do array
const numerosEmDobro = numeros.map(function(valor, indice, array) {
    return valor * 2
})

//Mesmo exemplo utilizando arrow function:
const numerosEmDobro2 = numeros.map(valor => valor * 2)

console.log(numerosEmDobro, numerosEmDobro2)