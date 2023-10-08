//Object.defineProperty() e Object.defineProperties()
//São relacionadas com as chaves do objeto
//Object.defineProperty() -> define uma propriedade
//Object.defineProperties() -> define várias propriedades

function Produto(nome, preco, estoque) {
    //Com o this as variáveis estão públicas
    this.nome = nome
    this.preco = preco

    //Quero alterar as propriedades da chave estoque

    //Estou criando o objeto com chave estoque e delegando as propriedades
    Object.defineProperty(this, 'estoque', { //define que eu quero que ela seja publica com this, informo o nome e dentro de {} indico as propriedades
        enumerable: true, //mostra a chave
        value: estoque, //estoque vai receber o valor de estoque
        writable: false, //Posso alterar ou não o valor
        configurable: false //Posso apagar ou reconfigurar a chave?
    })

    //Define Properties:
    Object.defineProperties(this, {
        nome2: {
        //As configurações vão dentro das chaves, dando mais controle em cada chave
            enumerable: true,
            value: nome, 
            writable: false, 
            configurable: false 
        },
        preco2: {
            enumerable: true,
            value: preco, 
            writable: true, 
            configurable: true
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
console.log(Object.keys(p1)) //Mostrando as chaves

for (let chave in p1) {
    console.log(chave)
}

