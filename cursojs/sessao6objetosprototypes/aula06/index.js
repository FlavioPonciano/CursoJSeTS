//Manipulando Prototypes

const objA = { //new Object -> Object.prototype
    chaveA: 'A'
    //__proto__ === Object.prototype
}

const objB = { 
    chaveB: 'B'
}

//Quero que __proto__ seja o objA para acessar o objA 
Object.setPrototypeOf(objB, objA) //A configuração de B é A e a cadeia do B muda ficando o B depois o A
console.log(objB.chaveA)

const objC = new Object()
objC.chaveC = 'C'
Object.setPrototypeOf(objC, objB)
console.log(objC.chaveB, objC.chaveA)


function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('Camiseta', 50)

const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype) //Setando os prototypes que estão setados para Produto
p2.aumento(10)
console.log(p2)

//Posso criar o objeto e já setar o prototype dele
//Colocando Produto.prototype o construtor vai ser Produto então os prototypes serão do produto
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 231
    }
})
p3.aumento(10)
console.log(p3)