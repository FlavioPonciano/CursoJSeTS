//Função construtora (contructor functions)
//Também cria novos objetos, mas a construtora já cria o objeto e retorna o objeto, só necessário criar ela.
//Precisa que seja iniciada com letra MAIUSCULA pois precisa utilizar o (new)

function Pessoa (nome, sobrenome) {
    //utilizar o const ou let para utilizar a variável e métodos somente dentro da função, são chamados atributos e métodos privados.
    const ID = 12345

    //Também posso fazer método interno
    const metodoInterno = function () {

    }
    //Atributos ou métodos publicos
    this.nome = nome
    this.sobrenome = sobrenome

    //Escrevendo um método (método é uma função dentro de um objeto)
    this.metodo = function() {
        console.log(`${this.nome}: Sou um método.`)
    }
}

//palavra new cria um novo objeto vazio, faz o this apontar para o objeto que está sendo utilizado
const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Flávio', 'Ponciano')
console.log(p1.nome)
console.log(p2.nome)
p1.metodo()
p2.metodo()
