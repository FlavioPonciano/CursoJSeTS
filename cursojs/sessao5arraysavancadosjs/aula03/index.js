//Concatenando Arrays
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//.concat() para concatenar
const a3 = a1.concat(a2, [7, 8, 9], 'Flávio')
console.log(a3)

//Pode concatenar com o spread
const a4 = [...a1, 'Flavio' ,...a2, ...[7, 8, 9]] //Utilizando o spread para concatenar o array e para concatenar um array literal tem que usar o rest no inicio ...[dentro do array concatenando]
console.log(a4)