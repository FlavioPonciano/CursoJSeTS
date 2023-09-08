let num1 = 10.3453453; //Number
let num2 = 2.5; //Number
let num3 = 1500; //Number

//Nesse caso passando o num1 para string somente para concatenar no console.log mas a variável se mantém number
console.log(num1.toString() + num2 + num3); //Converter ao menos um número em String para concatenar

num3 = num3.toString(2); //Nesse caso eu estou convertendo uma variável number para string Colocando o 2 no atributo ele vai converter a string para mostrar em binário e 10 em decimal e assim por diante
console.log(typeof num3);
console.log(num3);
console.log(num1.toFixed(3)); //Informando quantas casas decimais gostaria
console.log(Number.isInteger(num1)); //Verificando se um número é inteiro ou float
let temp = num1 * "Ola";
console.log(Number.isNaN(temp)); //Verificando se à variável é um not a number

//IEEE 754-2008 é o padrão de casas decimais seguidas pelo JavaScript
let num4 = 0.7;
let num5 = 0.1;
num4 += num5; //0.8
num4 += num5; //0.9
num4 += num5; // Aqui era para ser 1.0 porém não é o que acontece devido à padronização
//Para corrigir e trazer o 1.0 ou arredondamento do número:
num4 = parseFloat(num4.toFixed(2)); //converte o número para float e usa o toFixed para ditar as casas decimais Isso vai arredondar as casas
console.log(num4); // 1
console.log(Number.isInteger(num4)); //E o JS vai entender que esse é realmente um número inteiro, caso aumente ou diminua o valor da casa decimal ele retorna ao float até o próximo décimo de casa
num4 += num5;
console.log(num4);

//Formatando as casas decimais utilizando a matematica somente:
let num6 = 0.7
let num7 = 0.1

num6 = ((num6 * 100) + (num7 * 100)) / 100 //0.8
num6 = ((num6 * 100) + (num7 * 100)) / 100 //0.9
num6 = ((num6 * 100) + (num7 * 100)) / 100 //1.0

console.log(num6) //1
console.log(Number.isInteger(num6)) //true

//Para correção de imprecisão de forma mais rápida:
let num8 = 0.7
let num9 = 0.1

num8 += num9 //0.799...
num8 += num9 //0.899...
num8 += num9 //0.999...
console.log(num8) //Com as casas decimais longas

num8 = Number(num8.toFixed(2)) //Para correção é fixar a casa decimal dentro de uma transformação de Number
console.log(num8) //Mostrando o número inteiro
console.log(Number.isInteger(num8)) //Confirmando que o número é inteiro
 