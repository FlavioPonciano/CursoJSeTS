//Getters e Setter em Classes
//Criar uma chave privada dentro do objeto com Symbol
const _velocidade = Symbol('vel') //Posso adicionar uma descrição dentro do synmbol, ele vai gerar um id aleatório, isso vai proteger de alterações em cima de parametros que não queremos que mude.
class Carro {
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0 //jogo a chave dentro da classe e de outras linhas que chamam ela, dessa forma utilizando colchetes e excluindo o ponto, agora essa propriedade não pode ser acessada de fora do objeto
    }

    //Adiocionando o setter para que seja setado utilizando
    set velocidade(valor) {
        console.log('SETTER')
        if(typeof valor !== 'number') return
        if(valor >= 100 || valor <= 0) return
        this[_velocidade] = valor
    }

    //Acessar a chave velocidade de fora do objeto, quando for chamar ele vai chamar velocidade, porém ela vai manter os atributos que foram setados pra ela, nesse caso o limite de 100
    get velocidade() {
        console.log('GETTER')
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
       if(this[_velocidade] <= 100) return
       this[_velocidade]-- 
    }
}

const c1 = new Carro('Fusca')

//for (let i = 0; i<=200; i++) {
//    c1.acelerar()
//}
c1.velocidade = 20 //agora velocidade não pode ser alterado se for maior que 100 ou menor que 0 que foi setado "aqui usao o setter"
console.log(c1.velocidade) //acessando o velocidade que foi indicado no getter "get velocidade(){}" "aqui usa o getter"