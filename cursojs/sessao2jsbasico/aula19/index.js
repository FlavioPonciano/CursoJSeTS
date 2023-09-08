//Valores primitivos e valores por referência
/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados

Referência (mutável) - arrays, objetos, function - passados por referência, se eu aponto para um valor de referências todos os apontamentos estão ligados ao mesmo lugar na memória
*/

let a = [1, 2, 3]
let b = a //Pegando o valor de a por referencia
let c =b // Pegando o valor de referencia que é o mesmo de b, então se houver mudanças,tambem vão ocorrer em b e c
console.log(a, b, c)

let d = [...a] //Fazendo um spread, copiando para dentro da variável os valores de a nesse caso, então as alterações vão ocorrer somente dentro da variável d quando ela for trabalhada
console.log(d)

a.push(5)
d.push(4)
console.log(a, b) //nesse caso muda somente A e outros que pegam a referencia
console.log(d) // muda somente na D devido ao spread