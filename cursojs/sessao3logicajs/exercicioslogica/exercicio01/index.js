//Escreva uma função que recebe 2 números e retorne o maior deles
function retornaMaior (num1, num2) {
    resultado = num1 > num2 ? num1 : num2
    return resultado
}

//Arrow Function:
const retornaMaior2 = (num1, num2) => {
    return num1 > num2 ? num1 : num2
}

//Arrow mais simplificada quando tem só uma linha
const retornaMaior3 = (num1, num2) => num1 > num2 ? num1 : num2

console.log(retornaMaior(12, 9))
console.log(retornaMaior2(15, 7))
console.log(retornaMaior3(2, 4))