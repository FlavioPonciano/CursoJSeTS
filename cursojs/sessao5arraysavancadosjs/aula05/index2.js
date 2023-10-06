//Utilizando MAP em um array com objetos dentro
//Para cada elemento:
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz',    idade: 62},
    {nome: 'Maria',   idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana',  idade: 32},
    {nome: 'Wallace', idade: 47}
]

//Retornando array com os nomes
const nomes = pessoas.map(valor => valor.nome)
/*
//Deletando a chave nome: Isso mexe direto no objeto original
const idades = pessoas.map(function(objeto) {
    delete objeto.nome
    return objeto
})
*/

//Outra forma é retornando um objeto novo com a chave idade
const idades2 = pessoas.map(function(objeto) {
    return {idade: objeto.idade}
})

//Como fazer a função anterior reduzida para arrow function:
//Necessário colocar as chaves dentro de parenteses para que se torne uma expresão, caso contrário as chaves vão se tornar as chaves da função
const idades3 = pessoas.map(objeto => ({idade: objeto.idade}))

//Forma de adicionar ID's que não mexem no objeto original:
const comIds2 = pessoas.map(function(objeto, indice) {
    const newObjeto = {...objeto} //Objeto novo recebe o objeto original
    newObjeto.id = indice //Objeto novo recebe o id
    return newObjeto //Objeto novo é mostrado 
})

//Adicionar a chave ID: Isso mexe no valor original do objeto
const comIds = pessoas.map(function(objeto, indice) {
    objeto.id = (indice + 1) * 100
    return objeto
})




console.log(nomes, /*idades,*/ idades2, idades3, comIds, comIds2 )
