//Herança
//Tenho certos itens (camiseta, caneca, lapis...) esses itens posso dizer que são 'Produtos', ambos com aumento e desconto
//Nesses produtos temos a camiseta que pode ter uma cor e a caneca que pode ter um material diferente 
function Produtos(nome, preco) {
    this.nome = nome
    this.preco = preco
}

//Ambos métodos são referentes à todos os produtos:
Produtos.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produtos.prototype.desconto = function(quantia) {
    this.preco -= quantia
}

//Especializando os itens (criando uma função construtora para os itens):
function Camiseta(nome, preco, cor) {
    Produtos.call(this, nome, preco) //this traz os parametros do Produtos e agora ela vai funcionar igual a Produtos
     this.cor = cor //Agora camiseta tem uma propriedade a mais que o Produtos não tem
}

Camiseta.prototype = Object.create(Produtos.prototype) //Trazendo os prototypes que estão fora do Produtos para o camiseta, onde eu crio um objeto vazio que vai receber desses prototypes, onde agora posso usar aumento e desconto
//Porém como as propriedades são de produtos ele perde a Camiseta como constructor e para resolver isso é só fazer o constructor receber camiseta:
Camiseta.prototype.constructor = Camiseta

//Alterando um prototype que está vinculado a Camiseta via Produtos
Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100))
}

function Caneca(nome, preco, material, estoque) {
    Produtos.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
Caneca.prototype = Object.create(Produtos.prototype)
Caneca.prototype.constructor = Caneca

Caneca.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100))
}

const produto = new Produtos('Gen', 111)

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
camiseta.aumento(10)

const caneca = new Caneca('Branca', 10, 'porcelana', 300)
caneca.desconto(10)
console.log(camiseta)
console.log(caneca)
console.log(caneca.estoque)
console.log(produto)