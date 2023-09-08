//Básico de Objetos
//Como criar um objeto literal
const pessoa1 = {
  nome: "Flavio",
  sobrenome: "Ponciano",
  idade: 25,
};

console.log(pessoa1);
console.log(pessoa1.nome);

//Criando uma função que cria um objeto:
function criaPessoa(nome, sobrenome, idade) {
  //Essa função se chama factory pois ela cria objetos
  return {
    nome, //caso tenha valores iguais no parametro não é necessário repetir
    sobrenome,
    idade,
  };
}

const pessoa2 = criaPessoa("Andre", "Silva", 26);
const pessoa3 = criaPessoa("Karina", "Souza", 29);
const pessoa4 = criaPessoa("Julio", "Mendes", 45);
console.log(pessoa2.nome, pessoa3.sobrenome, pessoa4.idade);


const pessoa5 = {
    nome: 'Junior',
    sobrenome: 'Guedes',
    idade: 32,

    fala() { //Posso utilizar métodos e funções dentro de objetos e utilizar os atributos informados no objeto
        console.log(`${this.nome} ${this.sobrenome} está falando oi.`) //utilizando this para trazer os atributos
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade () { //Nesse exemplo toda vez que for chamado esse método ele vai adicionar +1 na idade
        this.idade++;
    }
}

pessoa5.fala()
pessoa5.incrementaIdade() //incrementando +1 na idade quando se chama o método dentro do objeto
pessoa5.fala()
pessoa5.incrementaIdade()
pessoa5.fala()
