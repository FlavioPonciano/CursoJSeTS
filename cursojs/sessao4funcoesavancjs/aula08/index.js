//Fábrica de Funções - (Factory Functions) - Funções de retornam objetos
//A grande vantagem é a criação de objetos de forma mais rápida e com menos linhas de código do que criação manual
function criaPessoa (nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') //Fazendo a divisão do nome por split em espaços e vai retornar um array ou chamado de vetor também
            this.nome = valor.shift() //Removendo o primeiro valor do array criado acima e adicionando a variável nome
            this.sobrenome = valor.join(' ') // unindo sobrenome e separando as palavras por espaço
        },
        fala: function (assunto = 'Falanbdo sobre nada') {
            return `${this.nome} está falando ${assunto}` //Nesse caso this é o p1 que está sendo atribuido abaixo seria a mesma coisa que falar p1.nome
        },
        altura,
        peso,
        //Getter (get) trasnformando o método em atributo
        get imc() { //posso utilizar somente imc( e ele vai se tornar um método) e com o get ele se finge ser um atributo do objeto e na chama ao fim do código lá não precisa mais utilizar parenteses
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80)
console.log(p1.fala('falando sobre JS.'))
console.log(p1.imc)
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42)
console.log(p2.fala('Falando também'))
console.log(p2.imc)
p1.nomeCompleto = 'Flávio Alexandre Ponciano'
//console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala())