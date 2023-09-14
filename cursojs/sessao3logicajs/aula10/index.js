// Atribuição via desestruturação (Arrays)
//Alterando o valor de cada letra
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

//Atribuindo e desestruturando
//[a, b, c] = [1, 2, 3];
const letras = [b, c, a];
[a, b, c] = letras;
console.log(a, b, c);
// --------------------------------------------------

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros; //Pegando os elementos de um array e atribuindo a duas ou mais variáveis conforme sequencia, Essa variável ...resto vai pegar o restante do array, se chama rest ou spread spread espalha os itens
console.log(primeiroNumero, segundoNumero, resto);

//Pode-se alternar os dados pegos dentro do array
const [um, , tres, ,cinco, ,sete] = numeros;
console.log(um, tres, cinco, sete);

//------------------------------
//                           0          1          2
//                        0  1  2    0  1  2    0  1  2
const novosNumeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(novosNumeros[1][2]) //Acessando o número 6 dentro da cadeia, primeiro o indice mais de fora para depois o indice mais de dentro
//Como pegar o número 6 via atribuição via desestruturação:
const [,[,,[seis]]] = novosNumeros;
console.log(seis);
//Forma mais interessante:
const [lista1, lista2, lista3] = novosNumeros;
console.log(lista3[2]);