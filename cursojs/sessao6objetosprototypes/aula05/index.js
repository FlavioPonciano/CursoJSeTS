//Prototypes (base para trabalhar com OOP)

//Função construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    //this.nomeCompleto = () => `${this.nome} ${this.sobrenome}`
}

//Pessoa.prototype === pessoa1.___proto___

//Criando um prototype
Pessoa.prototype.nomeCompleto = function() { //Caso eu tenha um método com o mesmo nome dentro da função construtora o que está dentro da função vai se sobresair ao de fora pois o JS primeiro procura dentro do objeto
    return `${this.nome} ${this.sobrenome}`
}

//Instância
const pessoa1 = new Pessoa ('Luiz', 'O.') // <- Pessoa = Função construtora
const pessoa2 = new Pessoa ('Maria', 'A.') // <- Pessoa = Função construtora

console.dir(pessoa1)
console.dir(pessoa2)