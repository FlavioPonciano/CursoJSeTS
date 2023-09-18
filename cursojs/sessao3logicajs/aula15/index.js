//For of - Estrutura de repetição especifico para objetos iteraveis como arrays e strings
const nome = 'Luiz Otávio'

//Utilizando for clássico:
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

//utilizando for in
for (let i in nome) {
    console.log(nome[i])
}

//Utilizando o for of - com o for of ele vai ler cada indice e retornar o valor
for (let valor of nome) {
    console.log(valor) //Vai mostrar o valor de cada indice com o console.log
}

//For of - utilizando em array - ele vai trazer o valor inteiro de cada indice
const nomes = ['Luiz', 'Otavio', 'Henrique']
for (let valor of nomes) {
    console.log(valor)
}

//Dentro do Array ainda há o for each
//Com o for each temos um função criada onde ele vai ter os atributos como elemento, indice e o array completo respectivamente
nomes.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array)
})


//For clássico - Gerlamente com iteráveis (array e string)
//For in - Retorna o índice ou chave(string, array ou objetos)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)