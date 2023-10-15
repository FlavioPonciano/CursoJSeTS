//Factory Functions + Prototypes
//Métodos estão desacoplados do prototype
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`)
  },
}

const comer = {
    comer() {
      console.log(`${this.nome} está comendo.`)
    },
  } 

const beber = {
beber() {
    console.log(`${this.nome} está bebendo.`)
},
} 
//chamando os métodos dentro do prototype de pessoa
const pessoaPrototype = { ...falar, ...comer, ...beber } //Posso usar também Object.assign({}, falar, comer, beber) as duas formas funcionam

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome}, 
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Luiz', 'Otavio')
const p2 = criaPessoa('Maria', 'Almeida')
console.log(p1)
console.log(p2)