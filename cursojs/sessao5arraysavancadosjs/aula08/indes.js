//For Each (forma de iterar arrays e somente em arrays) e somente sobre os valores do array
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const a2 = a1

a1.forEach((valor, indice, array) => console.log(valor, indice, array))

let total = 0
//Simulação de reduce
a2.forEach(valor => {
    total += valor
})
console.log(total)