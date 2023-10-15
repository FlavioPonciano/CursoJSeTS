//Objeto Map() - estrutura de dados
const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]

/* Dessa forma a ordem dos itens fica crescente e o id vira uma string (pode ser um problema se quiser ordem atual do array e que o id seja um number)
const novasPessoas = {}
for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas[id] = { ...pessoa}
}
*/
//Utilizando map: (ele vai trazer a ordem mantida e a chave ficou como number) 
const novasPessoas = new Map()
for (const pessoa of pessoas) {
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa}) //set(chave, valor que eu quero colocar no map )
}
console.log(novasPessoas)
/*Retorna:
Map(3) {
  3 => { id: 3, nome: 'Luiz' },
  2 => { id: 2, nome: 'Maria' },
  1 => { id: 1, nome: 'Helena' }
}
*/
console.log(novasPessoas.get(2)) //para obter valor do map eu utilizo o get

//Nesse caso ele retorna um array fazendo o destructor
for (const pessoa of novasPessoas) {
    console.log(pessoa)
}

//Também posso fazer do objeto que está dentro do array
for (const [identifier, {id, nome}] of novasPessoas) {
    console.log(identifier, nome, id)
}

//posso pegar a chave também:
for (const chave of novasPessoas.keys()) {
    console.log(chave)
}

//posso pegar os valores também:
for (const valor of novasPessoas.values()) {
    console.log(valor)
}

//Posso apagar uma chave
novasPessoas.delete(2)
console.log(novasPessoas)

//Estudar o map no MDN