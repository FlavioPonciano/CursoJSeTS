//Literal:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}
//Forma de acessar valores do objeto:
console.log(pessoa.nome, pessoa.sobrenome) //Notação de ponto
console.log(pessoa['nome'], pessoa['sobrenome']) //Notação de colchete

//Chave dinâmica
const chave = 'nome'
console.log(pessoa[chave]) 

//Contrutor de objeto:
const pessoa1 = new Object()
pessoa1.nome = 'Flávio'
pessoa1.sobrenome = 'Ponciano'

console.log(pessoa1, pessoa1.nome, pessoa1.sobrenome)

const pessoa2 = pessoa1

//Apagar uma chave do objeto:
delete pessoa2.nome
console.log(pessoa2)

//Métodos (funções dentro do objeto que executam ações):
pessoa.falaNome = function () {
    return(`${this.nome} Está falando o seu nome`)
}
console.log(pessoa.falaNome())

pessoa.getDataNascimento = function() {
    const dataAtual = new Date()
    return `Nascimento em ${dataAtual.getFullYear() - this.idade}`
}
console.log(pessoa.getDataNascimento())

//Utilizando for para pegar e mostrar elementos
for (let chave in pessoa) {
    console.log(chave) //Mostranso somente as chaves

}
console.log(`---Divisória---`)
for (let chave in pessoa) {
    console.log(pessoa[chave]) //Mostrando os elementos dentro das chaves    
}

//Criação de objetos: (Classes, Factory Function e Constructor Functions, ambas são padrões de projetos)
//Factory Function:
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`
        },
        //Posso utilizar sem o get e chamar com () na hora da chamada
        nomeCompleto2 () {
            return `${this.nome} ${this.sobrenome} Esse precisa de () para chamar`
        }
    }
}

const p1 = criaPessoa('Flavinho', 'do Pneu')
console.log(p1.nomeCompleto) //Utilizando o get lá dentro do objeto eu não preciso executar falando nomeCompleto()

console.log(p1.nomeCompleto2())

//Constructor Function:
function DadosPessoa(nome, sobrenome) {
    this.nome = nome //Utilizando this a variável se torna pública 
    this.sobrenome = sobrenome

    Object.freeze(this) //Travando a alteração de todos os valores do objetos criados, mesmo tentando mudar ele não será mudado
}
//Palavra new cria um objeto vazio, vai pegar a palavra this que é uma palavra chave e atrelar ao objeto e retorna esse this
//p2 = (Endereço de memória), eu posso alterar o valor, mas não posso trocar o endereço a chave
//Não posso fazer por exemplo p2 = outra coisa
const p2 = new DadosPessoa('Julio', 'Cesar') //Criando um objeto literal
console.log(p2) //Vai mostrar o construtor do objeto e o objeto
p2.nome = 'Outra coisa' //Posso alterar o valor da chave mesmo utilizando const pois p2 é só um endereço de memória
console.log(p2)

//Posso congelar (travar) o array ou objeto
const p4 = new DadosPessoa('Andre', 'Mendonça')
Object.freeze(p4) //Objeto trava e não pode ser alterado
p4.nome = 'Tentando mudar'
console.log(p4)
delete p4.nome //Se ele não estive travado pelo freeze o objeto nome seria deletado
//O this representa isso:
const p3 = {}
p3.nome = 'José' //Ele vincula o dados ao objeto sem precisar declarar tudo e vai se atrelar a cada nova declaração
console.log(p3)