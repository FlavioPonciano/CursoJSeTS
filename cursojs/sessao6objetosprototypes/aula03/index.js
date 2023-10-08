//Getters e Setters (simular um método da função do objeto que ele é um propriedade) uma maneira de proteger minha propriedade
//Getter para obter valor e Setter para setar o valor
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    
    //Caso queira trabalhar com as propriedades do objeto de forma privada posso gerar um outra variável que recebe o valor
    let estoquePrivado = estoque    

    Object.defineProperty(this, 'estoque', {
        //value: estoque, -> não preciso de value se for utilizar getter e setter
        //writable: true, -> não faz sentido ter se eu vou ter um método para trabalhar o meu valor
        enumerable: true,
        configurable: true,
        //Getter - obter o valor
        get: function() {
            return estoquePrivado
        },
        //Setando um valor, configurando
        set: function(valor) {
            if (typeof valor !== 'number') { //Com esse if a propriedade estoquePrivado não será alterada enquanto não for enviado um número
                throw new TypeError('Erro de dados')
            }
            estoquePrivado = valor
        }
    })
}


//Utilizando na função factory posso usar direto no objeto
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('Outro', '')
            nome = valor
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 500
console.log(p1.estoque)

const p2 = criaProduto('Camiseta')
p2.nome = 'Outro nome'
console.log(p2.nome)