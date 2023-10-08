//Métodos Uteis para Objetos
/*
*Já vimos:
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
...(spread)

*Novos:
Object.assign()
Object.getOwnPropertyDescriptor(objeto, 'propridades')
Object.values() mostra os valores dos objetos
Object.keys mostra as chaves
Object.entries mostra chaves e valores
*/

const produto = {nome: 'Produto', preco: 1.80}
const outraCoisa = produto //Apenas linkando o objeto a outra variável, então as alterações que ocorrem em uma vão ocorrer na outra
const outraCoisaCopiado = { 
    ...produto,
    material: 'porcelana'
} //copiando, as alterações nesse caso serão independentes, podendo até adicionar outras outras informações

produto.nome = 'Caneca'
console.log(outraCoisa) //Mesmo trocando o valor da chave nome a constante outra coisa também recebe essa alteração devido ao link e ao contrário também, se eu alterasse no outraCoisa iria mudar no produto
console.log(outraCoisaCopiado)

//Outra maneira de copiar o objeto para outra variável
const caneca = Object.assign({}, produto, {material: 'porcelana'}) //indicando a chave vazia para que produto seja copiado para dentro dela, então eu indico um target e qual será o objeto copiado e também adicionar mais objetos
console.log(caneca)

//Forma mais manual de copiar: Essa forma é mais manual mas dará mais controle em quais chaves serão copiadas
const caneca2 = {nome: produto.nome, preco: produto.preco}
Object.freeze(caneca2) //Não poderá mais ser alterado esse objeto
console.log(caneca2)

console.log(Object.keys(produto))

//Mostra as propriedades do objeto
Object.defineProperty(caneca, 'nome', { //entre as chaves vai o descriptor Property
    writable: false,
    configurable: false
})
//Como alterei as propriedades acima, não posso mais deletar nem alterar o objeto nome
caneca.nome = 'Outra coisa'
delete produto.nome
console.log(Object.getOwnPropertyDescriptor(caneca, 'nome'))

console.log(Object.values(caneca)) //Values pega apenas os valores do objeto
console.log(Object.entries(caneca)) //Retorna arrays com valores e chaves e isso permite que itere sobre os valores

//Posso iterar:
for (let entry of Object.entries(caneca)) {
    console.log(entry)
}

//Posso fazer a desestruturação direto no for:
for (let [chave, valor] of Object.entries(caneca)) {
    console.log(chave, valor)
}

console.log('---Divisória---')

//Forma um pouco maior
for (let valor of Object.entries(caneca)) {
    console.log(valor[0], valor[1])
}
