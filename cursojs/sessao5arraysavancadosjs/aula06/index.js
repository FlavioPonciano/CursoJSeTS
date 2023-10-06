//Reduce - Reduzindo Array (reduzir o array em um unico elemento) mas pode ser utilizada para outras coisas como o map e o filter, mas o interessante é continuar utilizando o map e o filter

//Some todos os números(reduce)
//Retorne um array com os pares (filter)
//Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//Somando todos os elementos do array
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    acumulador += valor //Acumulador recebe o valor de cada indice + o seu valor
    return acumulador
}, 0) //Posso receber um valor inicial para o meu acumulador, nesse caso o zero, caso não seja definido ele pega o primeiro valor do array, sempre preciso retornar algo para o acumulador para que ele tenha algo para mostrar, caso contrário ele vai gerar undefined
 console.log(total)

 //Retornando os números pares, porém é mais interessante utilizar o filter
 const total2 = numeros.reduce(function(acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor) //Como abaixo o meu acumulador é um array vazio eu utilizo o push para adicionar o elemento segundo a regra
    //if (valor % 2 !== 0) => se eu quisesse só os impares
    return acumulador
}, []) //Transformando o meu acumulador em um array
console.log(total2)

//Retornando o valor *2
const total3 = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2) //Basta transformar o acumulador em array novamente e fazer o push
    return acumulador
}, [])
console.log(total3)