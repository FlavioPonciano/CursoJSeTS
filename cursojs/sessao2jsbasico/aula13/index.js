//Mais sobre Strings:

let umaString = "Um \"texto\"" //Casop necessário pode ser usar barra invertida para utilizar aspas duplas dentro de uma string já com aspas duplas, mas isso já não é mais tão utilizado

//As strings no JS são indexadas como um array

console.log(umaString[4]) //Vai mostrar o quinto caractere na string
console.log(umaString[10]) //Indice maior que a string é undefined
console.log(umaString[-2]) //Indice menor que a string é undefined
console.log(umaString.charAt(6)) //Tambem retorna um valor de indice de uma string
console.log(umaString.concat(` em um lindo dia`)) //Utilizado para concatenar com a string inicial
console.log(umaString.indexOf('texto', 2)) //Em qual indice começa uma string e posso colocar a partir de qual indice quer que ele comece a procurar
console.log(umaString.lastIndexOf('t', 8)) //Mesma coisa do indexof porém ele começa do final para o começo
console.log(umaString.match(/[a-z]/g)) //Expressão regular qe vai retornar todas as letras minúsculas
console.log(umaString.search(/x/)) //Solicitando para encontrar o indice de uma letra dentro da string
console.log(umaString.replace('Um', 'Outro')) //Mudando uma palavra dentro da string
console.log(umaString.replace(/Um/, 'Outro')) //Também dá pra trocar utilizando expressão regular
console.log(umaString.replace(/t/g, '#')) //Alterando todos os "t" dentro da string por "#" (g indica que é para trocar todos)
console.log(umaString.length) //Vai mostrar o tamanho da string começando em 0
console.log(umaString.slice(2, 9)) // Pegando somente uma parte do texto, sempre começando do indice e acabando no indice +1, também podendo começar negativo sendo o negativo pegando o tamanho total da string e tirando a quantidade negativa no final
console.log(umaString.substring(umaString.length - 6, umaString.length -1))
console.log(umaString.split(' ', 2)) //Dividir a string com um caractere especifico, divid a string em um array de acordo com o caractere e também escolhendo a quantidade de vezes que isso ocorre
console.log(umaString.toUpperCase()) //Transformando as letras em maiusculas
console.log(umaString.toLowerCase()) // Transformando as letras em minusculas