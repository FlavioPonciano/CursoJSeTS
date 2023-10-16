//Criando uma classe (classe é parecida com função construtora)
//constructor é um método especial executado no momento em que a classe é instanciada, além disso os atributos da classe são definidos dentro deste método.
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
    //Os métodos são automaticamente linkados ao prototype
    falar() {
        console.log(`${this.nome}, está falando`)
    }
}
//Todos os objetos criados vão compartilhar somente um método nesse caso falar() ele vai ser trazido direto da classe Pessoa
const p1 = new Pessoa('Flávio', 'Ponciano')
const p2 = new Pessoa('Maria', 'Aparecida')
const p3 = new Pessoa('Joana', 'Souza')
const p4 = new Pessoa('João', 'Silva')
console.log(p1)
console.log(p2.falar())
console.log(p3)
console.log(p4.falar())