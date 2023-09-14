// Atribuição via desestruturação (Objetos)
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }

}
//Atribuição via desestruturação:
const {nome='', sobrenome} = pessoa //Caso algum valor não conste no objeto pode se atribuir um valor padrão
console.log(nome, sobrenome)

//Pode se mudar o nome da chave também:
const {nome: teste = ''} = pessoa //Nesse caso 'nome' é o nome da chave e teste é o nome da nova atribuição da variável
console.log(teste)

//Pegando valores do objeto dentro do objeto:
const {endereco: {rua: r = 12345, numero}, endereco} = pessoa //Esse ultimo endereco puxa a chave e completa e rua vai para a variável r e valor padrão de 12345 como padrão
console.log(rua, numero, endereco)

//O resto também pode ser pego em um objeto