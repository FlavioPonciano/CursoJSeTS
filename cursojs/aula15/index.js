//Objeto Math em JS

let num1 = 9.545778
console.log(Math.floor(num1)) //utilizando Math.floor para arredondar um número para baixo, podendo atribuir à uma outra variável também
//console.log(num2)
//console.log(Number.isInteger(num2)) //E o número se mantém como inteiro para o JS
console.log(Math.ceil(num1)) // Arredondando o número para cima conforme o exemplo acima
let qualquerVariavel = Math.ceil(num1) //Atribuindo à uma outra variável o número arredondado
console.log(qualquerVariavel)
console.log(Math.round(num1)) //Método round arredonda para o mais próximo sendo acima ou abaixo

console.log(Math.max(1,2,3,4,5,63,7,8)) //Encontrando o maior valor dentro de uma sequencia de números podendo ser aleatório
console.log(Math.min(1,22,3,4.5,6.7)) // Encontrando o menor valor dentro de uma sequencia de números podendo ser aleatório

const aleatorio = Math.round(Math.random() * (20-1) +1) //Gera um número aletório entre 0 e 1 por padrão adicionando o round ele vai arredondar e utilizando a expressão ele vai gerar de acordo com o escopo desejado, ainda assim preciso estudar mais esse método sendo: math.random() * (max - min) + min
console.log(aleatorio)

console.log(Math.PI) // Puxa o valor de PI

console.log(Math.pow(2, 10)) // Potenciação, sendo nesse caso 2 na décima potencia
console.log(2 ** 10) // que é a mesma coisa que fazer essa operação

// Pegar a raiz quadrada de qualquer número sem precisar de um objeto:
let tiraRaiz = 9
console.log(tiraRaiz ** (1/2)) //Vai mostrar a raiz ou ao invés de 1/2 usar 0.5

//Tipo de número Infinity: Dividindo por zero em JavaScript
console.log(100 / 0)