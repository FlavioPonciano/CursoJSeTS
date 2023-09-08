//Operadores aritméticos, de atribuição e incremento:

/*
Aritméticos: + - * / 
Sinal de + faz adição e concatenação
** potenciação
% resto da divisão
*/

//Concatenando: Sendo pelo menos uma das variáveis como string
const num1 = 5
const num2 = '10'
console.log(num1 + num2)

//Operador de incremento:
let contador = 1
contador ++ //Valor dela +1
++contador //pode ser adicionado pós e pré variável
console.log(++contador) //Se colocar pós ele vai mostrar o valor primeiro e depois incrementar então se colocar antes dele vai incrementar e depois mostrar

//Operador de decremento: 
console.log(--contador) //Também tendo o pré decremento e o pós decremento tamnbém

//Operador de atribuição: 
let contador1 = 0
contador1 += 2 //Isso é igual contador = contador + 2
contador *= 2 // Isso é igual a contador = contador * 2 e podendo fazer assim com os outros operadores

//Maneiras de converter strings em números:
const numero1 = 10
const numero2 = parseInt('5') //Convertendo para número inteiro
const numero3 = parseFloat('12.5') //Convertendo para número flutuante
const numero4 = Number('12.23') //Convertendo automaticamente para int ou float, é a melhor e mais usada
console.log(numero1 + numero2)
console.log(typeof numero2)