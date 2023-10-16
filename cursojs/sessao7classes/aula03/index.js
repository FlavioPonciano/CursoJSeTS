//Herança com Classes
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.nome} já ligado.`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.nome} já desligado.`)
            return
        }

        this.ligado = false
    }
}

//Herdando da classe anterior "extends", fazendo assim ela já herda tudo que está na outra classe, mas na classe atual não posso utilizar constructor igual a classe anterior, caso eu queira utilizar algum valor parecido com o anterior eu utilizo o super()
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo) {
        super(nome) //utilizando o super de superclass de classe pai (chamando o constructor da classe pai e executar ele aqui dentro), só adicionar "," se quiser adicionar mais, pois eu preciso de constructor 
        this.cor = cor
        this.modelo = modelo
    }
}

//Herdando da classe pai, porém alterando um método:
class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }
    //Se esse método ligar não fosse encontrado, ele iria buscar na classe pai
    ligar() {
        console.log('Método ligar alterado.')
    }
    //Também criar médotos próprios só dessa classe
    falaOi() {
        console.log('Oi!')
    }
}

const s1 = new Smartphone('iPhone', 'Preto', 'X')
s1.ligar()
console.log(s1)

const t1 = new Tablet('iPad', true)
t1.ligar()
console.log(t1.ligado)

//DispositivoEletronico -> classe pai
//Smartphone e Tablet são classes filhas de DispositivoEletronico e ao mesmo tempo são irmãs, então uma não herda da outra