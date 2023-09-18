//FOR in - Estrutura de Repetição
const frutas = ['Pera', 'Maçã', 'Uva'] //Array sem mais arrays dentro dele pode ser chamado de vetor
//Nesse caso abaixo ele está lendo o indice do array ou chaves de um objeto e não contando igual ao for normal:
for (let indice in frutas) {
    console.log(frutas[indice]) //Solicitiando a mostrar o conteúdo de cada indice
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

for (let chave in pessoa) {
    console.log(pessoa[chave]) //Acessando o elemento de cada chave
    console.log(chave) //Acessando somente a chave
    console.log(chave, pessoa[chave]) //Acessando a chave e cada elemento dentro de cada chave
}